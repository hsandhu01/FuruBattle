const axios = require('axios');

exports.getStockHistory = async (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data['Time Series (Daily)'];

    if (!data) {
      return res.status(404).json({ message: 'Stock data not found' });
    }

    const formattedData = Object.keys(data).map((date) => ({
      date,
      open: data[date]["1. open"],
      high: data[date]["2. high"],
      low: data[date]["3. low"],
      close: data[date]["4. close"],
      volume: data[date]["5. volume"],
    }));

    console.log(formattedData); // Log to check the structure
    res.json(formattedData);
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Error fetching stock data' });
  }
};