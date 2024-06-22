const axios = require('axios');

exports.getStock = async (req, res) => {
  const { symbol } = req.params;

  try {
    const response = await axios.get(`https://api.example.com/stock/${symbol}`);
    const stockData = response.data;

    res.json(stockData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};