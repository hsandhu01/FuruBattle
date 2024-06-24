const triviaData = [
    {
      question: 'What is the largest stock exchange in the world by market capitalization?',
      options: ['New York Stock Exchange', 'NASDAQ', 'London Stock Exchange', 'Tokyo Stock Exchange'],
      answer: 'New York Stock Exchange'
    },
    {
      question: 'What does IPO stand for in the stock market?',
      options: ['Initial Price Offering', 'Initial Public Offering', 'International Public Offering', 'Initial Private Offering'],
      answer: 'Initial Public Offering'
    },
    {
      question: 'Who is known as the Oracle of Omaha?',
      options: ['Bill Gates', 'Warren Buffett', 'Elon Musk', 'Jeff Bezos'],
      answer: 'Warren Buffett'
    },
    {
      question: 'What is the ticker symbol for Apple Inc.?',
      options: ['APPL', 'AAPL', 'APPLE', 'APLE'],
      answer: 'AAPL'
    },
    {
      question: 'What year was the New York Stock Exchange founded?',
      options: ['1792', '1801', '1852', '1901'],
      answer: '1792'
    },
    {
      question: 'What does ETF stand for in finance?',
      options: ['Exchange Traded Fund', 'Equity Traded Fund', 'Exchange Trade Facility', 'Equity Trade Facility'],
      answer: 'Exchange Traded Fund'
    },
    {
      question: 'Which company had the largest IPO in history?',
      options: ['Alibaba', 'Facebook', 'Visa', 'Uber'],
      answer: 'Alibaba'
    },
    {
      question: 'What is the primary function of the Securities and Exchange Commission (SEC)?',
      options: ['Regulate banks', 'Regulate stock exchanges', 'Protect investors', 'Manage federal budget'],
      answer: 'Protect investors'
    },
    {
      question: 'Who is the founder of Amazon?',
      options: ['Steve Jobs', 'Elon Musk', 'Jeff Bezos', 'Mark Zuckerberg'],
      answer: 'Jeff Bezos'
    },
    {
      question: 'What does the term "bull market" refer to?',
      options: ['Market going down', 'Market going up', 'Stable market', 'Volatile market'],
      answer: 'Market going up'
    },
    {
      question: 'What is a "bear market"?',
      options: ['Market going down', 'Market going up', 'Stable market', 'Volatile market'],
      answer: 'Market going down'
    },
    {
      question: 'What does P/E ratio stand for?',
      options: ['Price/Earnings ratio', 'Profit/Earnings ratio', 'Price/Equity ratio', 'Profit/Equity ratio'],
      answer: 'Price/Earnings ratio'
    },
    {
      question: 'Which index is considered the best indicator of the performance of the U.S. stock market?',
      options: ['NASDAQ Composite', 'S&P 500', 'Dow Jones Industrial Average', 'Russell 2000'],
      answer: 'S&P 500'
    },
    {
      question: 'What does EPS stand for in stock trading?',
      options: ['Earnings Per Share', 'Equity Per Share', 'Earnings Per Stock', 'Equity Per Stock'],
      answer: 'Earnings Per Share'
    },
    {
      question: 'What does the term "dividend" refer to?',
      options: ['A company\'s earnings distributed to shareholders', 'A company\'s retained earnings', 'The price of a company\'s stock', 'The market value of a company\'s shares'],
      answer: 'A company\'s earnings distributed to shareholders'
    },
    {
      question: 'Which of the following is the largest technology company by market capitalization?',
      options: ['Apple', 'Microsoft', 'Google', 'Amazon'],
      answer: 'Apple'
    },
    {
      question: 'What is the primary role of a stockbroker?',
      options: ['To provide investment advice', 'To execute buy and sell orders for stocks', 'To manage mutual funds', 'To analyze financial statements'],
      answer: 'To execute buy and sell orders for stocks'
    },
    {
      question: 'What is an index fund?',
      options: ['A fund that aims to replicate the performance of a specific index', 'A fund that invests in stocks and bonds', 'A fund that focuses on high-risk investments', 'A fund that aims to beat the market'],
      answer: 'A fund that aims to replicate the performance of a specific index'
    },
    {
      question: 'What is a "short sale"?',
      options: ['Buying a stock with the intention of selling it later at a higher price', 'Selling a stock you don\'t own with the intention of buying it back later at a lower price', 'Selling a stock for a short period of time', 'Buying a stock for a short period of time'],
      answer: 'Selling a stock you don\'t own with the intention of buying it back later at a lower price'
    },
    {
      question: 'Which financial ratio indicates a company\'s ability to pay short-term liabilities with short-term assets?',
      options: ['Debt-to-equity ratio', 'Current ratio', 'P/E ratio', 'Return on equity'],
      answer: 'Current ratio'
    },
    {
      question: 'What is the term for the profit made from selling a stock at a higher price than it was bought?',
      options: ['Dividend', 'Capital Gain', 'Return on Investment', 'Earnings Per Share'],
      answer: 'Capital Gain'
    },
    {
      question: 'What does the term "market capitalization" mean?',
      options: ['The total value of a company\'s outstanding shares', 'The total revenue of a company', 'The net profit of a company', 'The total assets of a company'],
      answer: 'The total value of a company\'s outstanding shares'
    },
    {
      question: 'What does the term "liquidity" refer to in the stock market?',
      options: ['The amount of cash a company has on hand', 'The ease with which an asset can be converted into cash', 'The profitability of a company', 'The market value of a company\'s shares'],
      answer: 'The ease with which an asset can be converted into cash'
    },
    {
      question: 'What is a "mutual fund"?',
      options: ['A fund that pools money from multiple investors to buy securities', 'A fund that invests in mutual agreements', 'A fund that is managed by individual investors', 'A fund that focuses on short-term investments'],
      answer: 'A fund that pools money from multiple investors to buy securities'
    },
    {
      question: 'What does the term "buy and hold" refer to?',
      options: ['Buying stocks and holding them for the long term', 'Buying stocks and selling them the same day', 'Buying stocks and selling them within a week', 'Buying stocks and holding them for a short period'],
      answer: 'Buying stocks and holding them for the long term'
    },
    {
      question: 'Which of the following represents ownership in a company?',
      options: ['Bonds', 'Stocks', 'Mutual Funds', 'Options'],
      answer: 'Stocks'
    },
    {
      question: 'What is the main goal of a growth investor?',
      options: ['To find undervalued stocks with high dividend yields', 'To find stocks that are expected to grow at an above-average rate', 'To find stable stocks with low risk', 'To find stocks that provide a steady income'],
      answer: 'To find stocks that are expected to grow at an above-average rate'
    },
    {
      question: 'What is the term for a market characterized by rising stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bull Market'
    },
    {
      question: 'What is the term for a market characterized by falling stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bear Market'
    },
    {
      question: 'Which of the following is a defensive stock?',
      options: ['Technology company', 'Pharmaceutical company', 'Energy company', 'Food and beverage company'],
      answer: 'Food and beverage company'
    },
    {
      question: 'What is an "IPO"?',
      options: ['Initial Price Offering', 'Initial Public Offering', 'International Public Offering', 'Initial Private Offering'],
      answer: 'Initial Public Offering'
    },
    {
      question: 'Which company is known as the "Big Blue"?',
      options: ['Microsoft', 'IBM', 'Google', 'Apple'],
      answer: 'IBM'
    },
    {
      question: 'What does the term "blue-chip stock" refer to?',
      options: ['A stock with high risk and high return', 'A stock with a history of stable earnings and reliable dividends', 'A stock that is undervalued', 'A stock in the technology sector'],
      answer: 'A stock with a history of stable earnings and reliable dividends'
    },
    {
      question: 'Which of the following is a common characteristic of a value stock?',
      options: ['High P/E ratio', 'High growth potential', 'Undervalued relative to its fundamentals', 'High dividend payout'],
      answer: 'Undervalued relative to its fundamentals'
    },
    {
      question: 'What is the term for a stock that is expected to perform well regardless of the economic conditions?',
      options: ['Cyclical stock', 'Defensive stock', 'Growth stock', 'Value stock'],
      answer: 'Defensive stock'
    },
    {
      question: 'What is a "stock split"?',
      options: ['When a company issues more shares to existing shareholders', 'When a company reduces the number of its outstanding shares', 'When a company merges with another company', 'When a company buys back its own shares'],
      answer: 'When a company issues more shares to existing shareholders'
    },
    {
      question: 'What does the term "beta" refer to in stock trading?',
      options: ['A measure of a stock\'s volatility relative to the overall market', 'A measure of a company\'s profitability', 'A measure of a company\'s liquidity', 'A measure of a stock\'s dividend yield'],
      answer: 'A measure of a stock\'s volatility relative to the overall market'
    },
    {
      question: 'What is the primary role of the Federal Reserve in the United States?',
      options: ['To regulate the stock market', 'To manage the country\'s money supply and interest rates', 'To oversee the banking industry', 'To provide loans to businesses'],
      answer: 'To manage the country\'s money supply and interest rates'
    },
    {
      question: 'Which of the following is NOT a major U.S. stock exchange?',
      options: ['NASDAQ', 'NYSE', 'AMEX', 'FTSE'],
      answer: 'FTSE'
    },
    {
      question: 'What is the term for a company\'s total earnings divided by the number of outstanding shares?',
      options: ['P/E ratio', 'Dividend yield', 'Earnings Per Share', 'Market capitalization'],
      answer: 'Earnings Per Share'
    },
    {
      question: 'What is the primary purpose of a stock market?',
      options: ['To buy and sell goods', 'To buy and sell shares of companies', 'To buy and sell real estate', 'To buy and sell commodities'],
      answer: 'To buy and sell shares of companies'
    },
    {
      question: 'Which of the following is a measure of stock market volatility?',
      options: ['P/E ratio', 'EPS', 'VIX', 'ROE'],
      answer: 'VIX'
    },
    {
      question: 'What is the primary goal of a value investor?',
      options: ['To find stocks that are undervalued relative to their intrinsic value', 'To find stocks with high growth potential', 'To find stocks with high dividend yields', 'To find stocks in the technology sector'],
      answer: 'To find stocks that are undervalued relative to their intrinsic value'
    },
    {
      question: 'Which of the following is considered a cyclical stock?',
      options: ['Utility company', 'Pharmaceutical company', 'Automotive company', 'Food and beverage company'],
      answer: 'Automotive company'
    },
    {
      question: 'What is a "mutual fund"?',
      options: ['A fund that pools money from multiple investors to buy securities', 'A fund that invests in mutual agreements', 'A fund that is managed by individual investors', 'A fund that focuses on short-term investments'],
      answer: 'A fund that pools money from multiple investors to buy securities'
    },
    {
      question: 'Which of the following is a defensive stock?',
      options: ['Technology company', 'Pharmaceutical company', 'Energy company', 'Food and beverage company'],
      answer: 'Food and beverage company'
    },
    {
      question: 'What is the main goal of a growth investor?',
      options: ['To find undervalued stocks with high dividend yields', 'To find stocks that are expected to grow at an above-average rate', 'To find stable stocks with low risk', 'To find stocks that provide a steady income'],
      answer: 'To find stocks that are expected to grow at an above-average rate'
    },
    {
      question: 'What does the term "market capitalization" mean?',
      options: ['The total value of a company\'s outstanding shares', 'The total revenue of a company', 'The net profit of a company', 'The total assets of a company'],
      answer: 'The total value of a company\'s outstanding shares'
    },
    {
      question: 'Which of the following is NOT a major U.S. stock exchange?',
      options: ['NASDAQ', 'NYSE', 'AMEX', 'FTSE'],
      answer: 'FTSE'
    },
    {
      question: 'What does the term "beta" refer to in stock trading?',
      options: ['A measure of a stock\'s volatility relative to the overall market', 'A measure of a company\'s profitability', 'A measure of a company\'s liquidity', 'A measure of a stock\'s dividend yield'],
      answer: 'A measure of a stock\'s volatility relative to the overall market'
    },
    {
      question: 'What is the primary goal of a value investor?',
      options: ['To find stocks that are undervalued relative to their intrinsic value', 'To find stocks with high growth potential', 'To find stocks with high dividend yields', 'To find stocks in the technology sector'],
      answer: 'To find stocks that are undervalued relative to their intrinsic value'
    },
    {
      question: 'What is the term for a stock that is expected to perform well regardless of the economic conditions?',
      options: ['Cyclical stock', 'Defensive stock', 'Growth stock', 'Value stock'],
      answer: 'Defensive stock'
    },
    {
      question: 'Which of the following represents ownership in a company?',
      options: ['Bonds', 'Stocks', 'Mutual Funds', 'Options'],
      answer: 'Stocks'
    },
    {
      question: 'What is the primary role of a stockbroker?',
      options: ['To provide investment advice', 'To execute buy and sell orders for stocks', 'To manage mutual funds', 'To analyze financial statements'],
      answer: 'To execute buy and sell orders for stocks'
    },
    {
      question: 'What does the term "liquidity" refer to in the stock market?',
      options: ['The amount of cash a company has on hand', 'The ease with which an asset can be converted into cash', 'The profitability of a company', 'The market value of a company\'s shares'],
      answer: 'The ease with which an asset can be converted into cash'
    },
    {
      question: 'What is an index fund?',
      options: ['A fund that aims to replicate the performance of a specific index', 'A fund that invests in stocks and bonds', 'A fund that focuses on high-risk investments', 'A fund that aims to beat the market'],
      answer: 'A fund that aims to replicate the performance of a specific index'
    },
    {
      question: 'Which financial ratio indicates a company\'s ability to pay short-term liabilities with short-term assets?',
      options: ['Debt-to-equity ratio', 'Current ratio', 'P/E ratio', 'Return on equity'],
      answer: 'Current ratio'
    },
    {
      question: 'What is the term for the profit made from selling a stock at a higher price than it was bought?',
      options: ['Dividend', 'Capital Gain', 'Return on Investment', 'Earnings Per Share'],
      answer: 'Capital Gain'
    },
    {
      question: 'What is a "short sale"?',
      options: ['Buying a stock with the intention of selling it later at a higher price', 'Selling a stock you don\'t own with the intention of buying it back later at a lower price', 'Selling a stock for a short period of time', 'Buying a stock for a short period of time'],
      answer: 'Selling a stock you don\'t own with the intention of buying it back later at a lower price'
    },
    {
      question: 'What does the term "dividend" refer to?',
      options: ['A company\'s earnings distributed to shareholders', 'A company\'s retained earnings', 'The price of a company\'s stock', 'The market value of a company\'s shares'],
      answer: 'A company\'s earnings distributed to shareholders'
    },
    {
      question: 'What is the term for a market characterized by rising stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bull Market'
    },
    {
      question: 'What is the term for a market characterized by falling stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bear Market'
    },
    {
      question: 'Which of the following is a measure of stock market volatility?',
      options: ['P/E ratio', 'EPS', 'VIX', 'ROE'],
      answer: 'VIX'
    },
    {
      question: 'What is the primary purpose of a stock market?',
      options: ['To buy and sell goods', 'To buy and sell shares of companies', 'To buy and sell real estate', 'To buy and sell commodities'],
      answer: 'To buy and sell shares of companies'
    },
    {
      question: 'Which of the following is considered a blue-chip stock?',
      options: ['Tesla', 'Facebook', 'Amazon', 'IBM'],
      answer: 'IBM'
    },
    {
      question: 'What does P/E ratio stand for in stock trading?',
      options: ['Price/Earnings ratio', 'Profit/Earnings ratio', 'Price/Equity ratio', 'Profit/Equity ratio'],
      answer: 'Price/Earnings ratio'
    },
    {
      question: 'What is the term for a market characterized by rising stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bull Market'
    },
    {
      question: 'What is the primary function of the Securities and Exchange Commission (SEC)?',
      options: ['Regulate banks', 'Regulate stock exchanges', 'Protect investors', 'Manage federal budget'],
      answer: 'Protect investors'
    },
    {
      question: 'What does the term "market capitalization" mean?',
      options: ['The total value of a company\'s outstanding shares', 'The total revenue of a company', 'The net profit of a company', 'The total assets of a company'],
      answer: 'The total value of a company\'s outstanding shares'
    },
    {
      question: 'Who is known as the "Oracle of Omaha"?',
      options: ['Jeff Bezos', 'Bill Gates', 'Warren Buffett', 'Elon Musk'],
      answer: 'Warren Buffett'
    },
    {
      question: 'What is a "bull market"?',
      options: ['A market where prices are falling', 'A market where prices are rising', 'A market with no changes in prices', 'A market that is stagnant'],
      answer: 'A market where prices are rising'
    },
    {
      question: 'What is a "bear market"?',
      options: ['A market where prices are falling', 'A market where prices are rising', 'A market with no changes in prices', 'A market that is stagnant'],
      answer: 'A market where prices are falling'
    },
    {
      question: 'What does the term "beta" refer to in stock trading?',
      options: ['A measure of a stock\'s volatility relative to the overall market', 'A measure of a company\'s profitability', 'A measure of a company\'s liquidity', 'A measure of a stock\'s dividend yield'],
      answer: 'A measure of a stock\'s volatility relative to the overall market'
    },
    {
      question: 'What is the main goal of a growth investor?',
      options: ['To find undervalued stocks with high dividend yields', 'To find stocks that are expected to grow at an above-average rate', 'To find stable stocks with low risk', 'To find stocks that provide a steady income'],
      answer: 'To find stocks that are expected to grow at an above-average rate'
    },
    {
      question: 'Which index is considered the best indicator of the performance of the U.S. stock market?',
      options: ['NASDAQ Composite', 'S&P 500', 'Dow Jones Industrial Average', 'Russell 2000'],
      answer: 'S&P 500'
    },
    {
      question: 'What is a "stock split"?',
      options: ['When a company issues more shares to existing shareholders', 'When a company reduces the number of its outstanding shares', 'When a company merges with another company', 'When a company buys back its own shares'],
      answer: 'When a company issues more shares to existing shareholders'
    },
    {
      question: 'What is a stock\'s "beta"?',
      options: ['A measure of a stock\'s volatility relative to the overall market', 'A measure of a company\'s profitability', 'A measure of a company\'s liquidity', 'A measure of a stock\'s dividend yield'],
      answer: 'A measure of a stock\'s volatility relative to the overall market'
    },
    {
      question: 'What does the term "liquidity" refer to in the stock market?',
      options: ['The amount of cash a company has on hand', 'The ease with which an asset can be converted into cash', 'The profitability of a company', 'The market value of a company\'s shares'],
      answer: 'The ease with which an asset can be converted into cash'
    },
    {
      question: 'What is the term for a market characterized by rising stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bull Market'
    },
    {
      question: 'What is the primary role of the Federal Reserve in the United States?',
      options: ['To regulate the stock market', 'To manage the country\'s money supply and interest rates', 'To oversee the banking industry', 'To provide loans to businesses'],
      answer: 'To manage the country\'s money supply and interest rates'
    },
    {
      question: 'Which of the following is NOT a major U.S. stock exchange?',
      options: ['NASDAQ', 'NYSE', 'AMEX', 'FTSE'],
      answer: 'FTSE'
    },
    {
      question: 'What is the primary goal of a value investor?',
      options: ['To find stocks that are undervalued relative to their intrinsic value', 'To find stocks with high growth potential', 'To find stocks with high dividend yields', 'To find stocks in the technology sector'],
      answer: 'To find stocks that are undervalued relative to their intrinsic value'
    },
    {
      question: 'Which of the following is a defensive stock?',
      options: ['Technology company', 'Pharmaceutical company', 'Energy company', 'Food and beverage company'],
      answer: 'Food and beverage company'
    },
    {
      question: 'What is the primary role of a stockbroker?',
      options: ['To provide investment advice', 'To execute buy and sell orders for stocks', 'To manage mutual funds', 'To analyze financial statements'],
      answer: 'To execute buy and sell orders for stocks'
    },
    {
      question: 'What does the term "market capitalization" mean?',
      options: ['The total value of a company\'s outstanding shares', 'The total revenue of a company', 'The net profit of a company', 'The total assets of a company'],
      answer: 'The total value of a company\'s outstanding shares'
    },
    {
      question: 'What does the term "buy and hold" refer to?',
      options: ['Buying stocks and holding them for the long term', 'Buying stocks and selling them the same day', 'Buying stocks and selling them within a week', 'Buying stocks and holding them for a short period'],
      answer: 'Buying stocks and holding them for the long term'
    },
    {
      question: 'What is a "mutual fund"?',
      options: ['A fund that pools money from multiple investors to buy securities', 'A fund that invests in mutual agreements', 'A fund that is managed by individual investors', 'A fund that focuses on short-term investments'],
      answer: 'A fund that pools money from multiple investors to buy securities'
    },
    {
      question: 'What is the term for a profit made from selling a stock at a higher price than it was bought?',
      options: ['Dividend', 'Capital Gain', 'Return on Investment', 'Earnings Per Share'],
      answer: 'Capital Gain'
    },
    {
      question: 'What is the primary goal of a growth investor?',
      options: ['To find undervalued stocks with high dividend yields', 'To find stocks that are expected to grow at an above-average rate', 'To find stable stocks with low risk', 'To find stocks that provide a steady income'],
      answer: 'To find stocks that are expected to grow at an above-average rate'
    },
    {
      question: 'What is the primary purpose of a stock market?',
      options: ['To buy and sell goods', 'To buy and sell shares of companies', 'To buy and sell real estate', 'To buy and sell commodities'],
      answer: 'To buy and sell shares of companies'
    },
    {
      question: 'What does the term "liquidity" refer to in the stock market?',
      options: ['The amount of cash a company has on hand', 'The ease with which an asset can be converted into cash', 'The profitability of a company', 'The market value of a company\'s shares'],
      answer: 'The ease with which an asset can be converted into cash'
    },
    {
      question: 'What is the primary role of the Federal Reserve in the United States?',
      options: ['To regulate the stock market', 'To manage the country\'s money supply and interest rates', 'To oversee the banking industry', 'To provide loans to businesses'],
      answer: 'To manage the country\'s money supply and interest rates'
    },
    {
      question: 'Which of the following is a common characteristic of a value stock?',
      options: ['High P/E ratio', 'High growth potential', 'Undervalued relative to its fundamentals', 'High dividend payout'],
      answer: 'Undervalued relative to its fundamentals'
    },
    {
      question: 'What does P/E ratio stand for?',
      options: ['Price/Earnings ratio', 'Profit/Earnings ratio', 'Price/Equity ratio', 'Profit/Equity ratio'],
      answer: 'Price/Earnings ratio'
    },
    {
      question: 'What is the primary role of a stockbroker?',
      options: ['To provide investment advice', 'To execute buy and sell orders for stocks', 'To manage mutual funds', 'To analyze financial statements'],
      answer: 'To execute buy and sell orders for stocks'
    },
    {
      question: 'What is the term for the profit made from selling a stock at a higher price than it was bought?',
      options: ['Dividend', 'Capital Gain', 'Return on Investment', 'Earnings Per Share'],
      answer: 'Capital Gain'
    },
    {
      question: 'Which of the following represents ownership in a company?',
      options: ['Bonds', 'Stocks', 'Mutual Funds', 'Options'],
      answer: 'Stocks'
    },
    {
      question: 'What is the primary role of a stockbroker?',
      options: ['To provide investment advice', 'To execute buy and sell orders for stocks', 'To manage mutual funds', 'To analyze financial statements'],
      answer: 'To execute buy and sell orders for stocks'
    },
    {
      question: 'What is the primary goal of a value investor?',
      options: ['To find stocks that are undervalued relative to their intrinsic value', 'To find stocks with high growth potential', 'To find stocks with high dividend yields', 'To find stocks in the technology sector'],
      answer: 'To find stocks that are undervalued relative to their intrinsic value'
    },
    {
      question: 'What does the term "buy and hold" refer to?',
      options: ['Buying stocks and holding them for the long term', 'Buying stocks and selling them the same day', 'Buying stocks and selling them within a week', 'Buying stocks and holding them for a short period'],
      answer: 'Buying stocks and holding them for the long term'
    },
    {
      question: 'What is a "mutual fund"?',
      options: ['A fund that pools money from multiple investors to buy securities', 'A fund that invests in mutual agreements', 'A fund that is managed by individual investors', 'A fund that focuses on short-term investments'],
      answer: 'A fund that pools money from multiple investors to buy securities'
    },
    {
      question: 'Which of the following is considered a blue-chip stock?',
      options: ['Tesla', 'Facebook', 'Amazon', 'IBM'],
      answer: 'IBM'
    },
    {
      question: 'What does EPS stand for in stock trading?',
      options: ['Earnings Per Share', 'Equity Per Share', 'Earnings Per Stock', 'Equity Per Stock'],
      answer: 'Earnings Per Share'
    },
    {
      question: 'Which company is known as the "Big Blue"?',
      options: ['Microsoft', 'IBM', 'Google', 'Apple'],
      answer: 'IBM'
    },
    {
      question: 'What does the term "dividend" refer to?',
      options: ['A company\'s earnings distributed to shareholders', 'A company\'s retained earnings', 'The price of a company\'s stock', 'The market value of a company\'s shares'],
      answer: 'A company\'s earnings distributed to shareholders'
    },
    {
      question: 'What does ETF stand for in finance?',
      options: ['Exchange Traded Fund', 'Equity Traded Fund', 'Exchange Trade Facility', 'Equity Trade Facility'],
      answer: 'Exchange Traded Fund'
    },
    {
      question: 'Which company had the largest IPO in history?',
      options: ['Alibaba', 'Facebook', 'Visa', 'Uber'],
      answer: 'Alibaba'
    },
    {
      question: 'What is the primary function of the Securities and Exchange Commission (SEC)?',
      options: ['Regulate banks', 'Regulate stock exchanges', 'Protect investors', 'Manage federal budget'],
      answer: 'Protect investors'
    },
    {
      question: 'Who is the founder of Amazon?',
      options: ['Steve Jobs', 'Elon Musk', 'Jeff Bezos', 'Mark Zuckerberg'],
      answer: 'Jeff Bezos'
    },
    {
      question: 'What does the term "bull market" refer to?',
      options: ['Market going down', 'Market going up', 'Stable market', 'Volatile market'],
      answer: 'Market going up'
    },
    {
      question: 'What is a "bear market"?',
      options: ['Market going down', 'Market going up', 'Stable market', 'Volatile market'],
      answer: 'Market going down'
    },
    {
      question: 'What does P/E ratio stand for?',
      options: ['Price/Earnings ratio', 'Profit/Earnings ratio', 'Price/Equity ratio', 'Profit/Equity ratio'],
      answer: 'Price/Earnings ratio'
    },
    {
      question: 'Which index is considered the best indicator of the performance of the U.S. stock market?',
      options: ['NASDAQ Composite', 'S&P 500', 'Dow Jones Industrial Average', 'Russell 2000'],
      answer: 'S&P 500'
    },
    {
      question: 'What does EPS stand for in stock trading?',
      options: ['Earnings Per Share', 'Equity Per Share', 'Earnings Per Stock', 'Equity Per Stock'],
      answer: 'Earnings Per Share'
    },
    {
      question: 'What does the term "dividend" refer to?',
      options: ['A company\'s earnings distributed to shareholders', 'A company\'s retained earnings', 'The price of a company\'s stock', 'The market value of a company\'s shares'],
      answer: 'A company\'s earnings distributed to shareholders'
    },
    {
      question: 'Which of the following is the largest technology company by market capitalization?',
      options: ['Apple', 'Microsoft', 'Google', 'Amazon'],
      answer: 'Apple'
    },
    {
      question: 'What is the primary role of a stockbroker?',
      options: ['To provide investment advice', 'To execute buy and sell orders for stocks', 'To manage mutual funds', 'To analyze financial statements'],
      answer: 'To execute buy and sell orders for stocks'
    },
    {
      question: 'What is an index fund?',
      options: ['A fund that aims to replicate the performance of a specific index', 'A fund that invests in stocks and bonds', 'A fund that focuses on high-risk investments', 'A fund that aims to beat the market'],
      answer: 'A fund that aims to replicate the performance of a specific index'
    },
    {
      question: 'What is a "short sale"?',
      options: ['Buying a stock with the intention of selling it later at a higher price', 'Selling a stock you don\'t own with the intention of buying it back later at a lower price', 'Selling a stock for a short period of time', 'Buying a stock for a short period of time'],
      answer: 'Selling a stock you don\'t own with the intention of buying it back later at a lower price'
    },
    {
      question: 'Which financial ratio indicates a company\'s ability to pay short-term liabilities with short-term assets?',
      options: ['Debt-to-equity ratio', 'Current ratio', 'P/E ratio', 'Return on equity'],
      answer: 'Current ratio'
    },
    {
      question: 'What is the term for the profit made from selling a stock at a higher price than it was bought?',
      options: ['Dividend', 'Capital Gain', 'Return on Investment', 'Earnings Per Share'],
      answer: 'Capital Gain'
    },
    {
      question: 'What does the term "market capitalization" mean?',
      options: ['The total value of a company\'s outstanding shares', 'The total revenue of a company', 'The net profit of a company', 'The total assets of a company'],
      answer: 'The total value of a company\'s outstanding shares'
    },
    {
      question: 'What does the term "liquidity" refer to in the stock market?',
      options: ['The amount of cash a company has on hand', 'The ease with which an asset can be converted into cash', 'The profitability of a company', 'The market value of a company\'s shares'],
      answer: 'The ease with which an asset can be converted into cash'
    },
    {
      question: 'What is a "mutual fund"?',
      options: ['A fund that pools money from multiple investors to buy securities', 'A fund that invests in mutual agreements', 'A fund that is managed by individual investors', 'A fund that focuses on short-term investments'],
      answer: 'A fund that pools money from multiple investors to buy securities'
    },
    {
      question: 'Which of the following is a defensive stock?',
      options: ['Technology company', 'Pharmaceutical company', 'Energy company', 'Food and beverage company'],
      answer: 'Food and beverage company'
    },
    {
      question: 'What is the main goal of a growth investor?',
      options: ['To find undervalued stocks with high dividend yields', 'To find stocks that are expected to grow at an above-average rate', 'To find stable stocks with low risk', 'To find stocks that provide a steady income'],
      answer: 'To find stocks that are expected to grow at an above-average rate'
    },
    {
      question: 'What is the term for a market characterized by rising stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bull Market'
    },
    {
      question: 'What is the term for a market characterized by falling stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bear Market'
    },
    {
      question: 'Which of the following is a measure of stock market volatility?',
      options: ['P/E ratio', 'EPS', 'VIX', 'ROE'],
      answer: 'VIX'
    },
    {
      question: 'What is the primary purpose of a stock market?',
      options: ['To buy and sell goods', 'To buy and sell shares of companies', 'To buy and sell real estate', 'To buy and sell commodities'],
      answer: 'To buy and sell shares of companies'
    },
    {
      question: 'Which of the following is considered a blue-chip stock?',
      options: ['Tesla', 'Facebook', 'Amazon', 'IBM'],
      answer: 'IBM'
    },
    {
      question: 'What does P/E ratio stand for in stock trading?',
      options: ['Price/Earnings ratio', 'Profit/Earnings ratio', 'Price/Equity ratio', 'Profit/Equity ratio'],
      answer: 'Price/Earnings ratio'
    },
    {
      question: 'What is the term for a market characterized by rising stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bull Market'
    },
    {
      question: 'What is the primary function of the Securities and Exchange Commission (SEC)?',
      options: ['Regulate banks', 'Regulate stock exchanges', 'Protect investors', 'Manage federal budget'],
      answer: 'Protect investors'
    },
    {
      question: 'What does the term "market capitalization" mean?',
      options: ['The total value of a company\'s outstanding shares', 'The total revenue of a company', 'The net profit of a company', 'The total assets of a company'],
      answer: 'The total value of a company\'s outstanding shares'
    },
    {
      question: 'Who is known as the "Oracle of Omaha"?',
      options: ['Jeff Bezos', 'Bill Gates', 'Warren Buffett', 'Elon Musk'],
      answer: 'Warren Buffett'
    },
    {
      question: 'What is a "bull market"?',
      options: ['A market where prices are falling', 'A market where prices are rising', 'A market with no changes in prices', 'A market that is stagnant'],
      answer: 'A market where prices are rising'
    },
    {
      question: 'What is a "bear market"?',
      options: ['A market where prices are falling', 'A market where prices are rising', 'A market with no changes in prices', 'A market that is stagnant'],
      answer: 'A market where prices are falling'
    },
    {
      question: 'What does the term "beta" refer to in stock trading?',
      options: ['A measure of a stock\'s volatility relative to the overall market', 'A measure of a company\'s profitability', 'A measure of a company\'s liquidity', 'A measure of a stock\'s dividend yield'],
      answer: 'A measure of a stock\'s volatility relative to the overall market'
    },
    {
      question: 'What is the main goal of a growth investor?',
      options: ['To find undervalued stocks with high dividend yields', 'To find stocks that are expected to grow at an above-average rate', 'To find stable stocks with low risk', 'To find stocks that provide a steady income'],
      answer: 'To find stocks that are expected to grow at an above-average rate'
    },
    {
      question: 'Which index is considered the best indicator of the performance of the U.S. stock market?',
      options: ['NASDAQ Composite', 'S&P 500', 'Dow Jones Industrial Average', 'Russell 2000'],
      answer: 'S&P 500'
    },
    {
      question: 'What is a "stock split"?',
      options: ['When a company issues more shares to existing shareholders', 'When a company reduces the number of its outstanding shares', 'When a company merges with another company', 'When a company buys back its own shares'],
      answer: 'When a company issues more shares to existing shareholders'
    },
    {
      question: 'What is a stock\'s "beta"?',
      options: ['A measure of a stock\'s volatility relative to the overall market', 'A measure of a company\'s profitability', 'A measure of a company\'s liquidity', 'A measure of a stock\'s dividend yield'],
      answer: 'A measure of a stock\'s volatility relative to the overall market'
    },
    {
      question: 'What does the term "liquidity" refer to in the stock market?',
      options: ['The amount of cash a company has on hand', 'The ease with which an asset can be converted into cash', 'The profitability of a company', 'The market value of a company\'s shares'],
      answer: 'The ease with which an asset can be converted into cash'
    },
    {
      question: 'What is the term for a market characterized by rising stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bull Market'
    },
    {
      question: 'What is the primary role of the Federal Reserve in the United States?',
      options: ['To regulate the stock market', 'To manage the country\'s money supply and interest rates', 'To oversee the banking industry', 'To provide loans to businesses'],
      answer: 'To manage the country\'s money supply and interest rates'
    },
    {
      question: 'Which of the following is NOT a major U.S. stock exchange?',
      options: ['NASDAQ', 'NYSE', 'AMEX', 'FTSE'],
      answer: 'FTSE'
    },
    {
      question: 'What is the primary goal of a value investor?',
      options: ['To find stocks that are undervalued relative to their intrinsic value', 'To find stocks with high growth potential', 'To find stocks with high dividend yields', 'To find stocks in the technology sector'],
      answer: 'To find stocks that are undervalued relative to their intrinsic value'
    },
    {
      question: 'Which of the following is a defensive stock?',
      options: ['Technology company', 'Pharmaceutical company', 'Energy company', 'Food and beverage company'],
      answer: 'Food and beverage company'
    },
    {
      question: 'What is the primary role of a stockbroker?',
      options: ['To provide investment advice', 'To execute buy and sell orders for stocks', 'To manage mutual funds', 'To analyze financial statements'],
      answer: 'To execute buy and sell orders for stocks'
    },
    {
      question: 'What does the term "market capitalization" mean?',
      options: ['The total value of a company\'s outstanding shares', 'The total revenue of a company', 'The net profit of a company', 'The total assets of a company'],
      answer: 'The total value of a company\'s outstanding shares'
    },
    {
      question: 'What does the term "buy and hold" refer to?',
      options: ['Buying stocks and holding them for the long term', 'Buying stocks and selling them the same day', 'Buying stocks and selling them within a week', 'Buying stocks and holding them for a short period'],
      answer: 'Buying stocks and holding them for the long term'
    },
    {
      question: 'What is a "mutual fund"?',
      options: ['A fund that pools money from multiple investors to buy securities', 'A fund that invests in mutual agreements', 'A fund that is managed by individual investors', 'A fund that focuses on short-term investments'],
      answer: 'A fund that pools money from multiple investors to buy securities'
    },
    {
      question: 'What is the term for a profit made from selling a stock at a higher price than it was bought?',
      options: ['Dividend', 'Capital Gain', 'Return on Investment', 'Earnings Per Share'],
      answer: 'Capital Gain'
    },
    {
      question: 'What is the primary goal of a growth investor?',
      options: ['To find undervalued stocks with high dividend yields', 'To find stocks that are expected to grow at an above-average rate', 'To find stable stocks with low risk', 'To find stocks that provide a steady income'],
      answer: 'To find stocks that are expected to grow at an above-average rate'
    },
    {
      question: 'What is the primary purpose of a stock market?',
      options: ['To buy and sell goods', 'To buy and sell shares of companies', 'To buy and sell real estate', 'To buy and sell commodities'],
      answer: 'To buy and sell shares of companies'
    },
    {
      question: 'What does the term "liquidity" refer to in the stock market?',
      options: ['The amount of cash a company has on hand', 'The ease with which an asset can be converted into cash', 'The profitability of a company', 'The market value of a company\'s shares'],
      answer: 'The ease with which an asset can be converted into cash'
    },
    {
      question: 'What is the primary role of the Federal Reserve in the United States?',
      options: ['To regulate the stock market', 'To manage the country\'s money supply and interest rates', 'To oversee the banking industry', 'To provide loans to businesses'],
      answer: 'To manage the country\'s money supply and interest rates'
    },
    {
      question: 'Which of the following is a common characteristic of a value stock?',
      options: ['High P/E ratio', 'High growth potential', 'Undervalued relative to its fundamentals', 'High dividend payout'],
      answer: 'Undervalued relative to its fundamentals'
    },
    {
      question: 'What does P/E ratio stand for?',
      options: ['Price/Earnings ratio', 'Profit/Earnings ratio', 'Price/Equity ratio', 'Profit/Equity ratio'],
      answer: 'Price/Earnings ratio'
    },
    {
      question: 'What is the primary role of a stockbroker?',
      options: ['To provide investment advice', 'To execute buy and sell orders for stocks', 'To manage mutual funds', 'To analyze financial statements'],
      answer: 'To execute buy and sell orders for stocks'
    },
    {
      question: 'What is the term for the profit made from selling a stock at a higher price than it was bought?',
      options: ['Dividend', 'Capital Gain', 'Return on Investment', 'Earnings Per Share'],
      answer: 'Capital Gain'
    },
    {
      question: 'Which of the following represents ownership in a company?',
      options: ['Bonds', 'Stocks', 'Mutual Funds', 'Options'],
      answer: 'Stocks'
    },
    {
      question: 'What is the primary role of a stockbroker?',
      options: ['To provide investment advice', 'To execute buy and sell orders for stocks', 'To manage mutual funds', 'To analyze financial statements'],
      answer: 'To execute buy and sell orders for stocks'
    },
    {
      question: 'What is the primary goal of a value investor?',
      options: ['To find stocks that are undervalued relative to their intrinsic value', 'To find stocks with high growth potential', 'To find stocks with high dividend yields', 'To find stocks in the technology sector'],
      answer: 'To find stocks that are undervalued relative to their intrinsic value'
    },
    {
      question: 'What does the term "buy and hold" refer to?',
      options: ['Buying stocks and holding them for the long term', 'Buying stocks and selling them the same day', 'Buying stocks and selling them within a week', 'Buying stocks and holding them for a short period'],
      answer: 'Buying stocks and holding them for the long term'
    },
    {
      question: 'What is a "mutual fund"?',
      options: ['A fund that pools money from multiple investors to buy securities', 'A fund that invests in mutual agreements', 'A fund that is managed by individual investors', 'A fund that focuses on short-term investments'],
      answer: 'A fund that pools money from multiple investors to buy securities'
    },
    {
      question: 'Which of the following is considered a blue-chip stock?',
      options: ['Tesla', 'Facebook', 'Amazon', 'IBM'],
      answer: 'IBM'
    },
    {
      question: 'What does EPS stand for in stock trading?',
      options: ['Earnings Per Share', 'Equity Per Share', 'Earnings Per Stock', 'Equity Per Stock'],
      answer: 'Earnings Per Share'
    },
    {
      question: 'Which company is known as the "Big Blue"?',
      options: ['Microsoft', 'IBM', 'Google', 'Apple'],
      answer: 'IBM'
    },
    {
      question: 'What does the term "dividend" refer to?',
      options: ['A company\'s earnings distributed to shareholders', 'A company\'s retained earnings', 'The price of a company\'s stock', 'The market value of a company\'s shares'],
      answer: 'A company\'s earnings distributed to shareholders'
    },
    {
      question: 'What does ETF stand for in finance?',
      options: ['Exchange Traded Fund', 'Equity Traded Fund', 'Exchange Trade Facility', 'Equity Trade Facility'],
      answer: 'Exchange Traded Fund'
    },
    {
      question: 'Which company had the largest IPO in history?',
      options: ['Alibaba', 'Facebook', 'Visa', 'Uber'],
      answer: 'Alibaba'
    },
    {
      question: 'What is the primary function of the Securities and Exchange Commission (SEC)?',
      options: ['Regulate banks', 'Regulate stock exchanges', 'Protect investors', 'Manage federal budget'],
      answer: 'Protect investors'
    },
    {
      question: 'Who is the founder of Amazon?',
      options: ['Steve Jobs', 'Elon Musk', 'Jeff Bezos', 'Mark Zuckerberg'],
      answer: 'Jeff Bezos'
    },
    {
      question: 'What does the term "bull market" refer to?',
      options: ['Market going down', 'Market going up', 'Stable market', 'Volatile market'],
      answer: 'Market going up'
    },
    {
      question: 'What is a "bear market"?',
      options: ['Market going down', 'Market going up', 'Stable market', 'Volatile market'],
      answer: 'Market going down'
    },
    {
      question: 'What does P/E ratio stand for?',
      options: ['Price/Earnings ratio', 'Profit/Earnings ratio', 'Price/Equity ratio', 'Profit/Equity ratio'],
      answer: 'Price/Earnings ratio'
    },
    {
      question: 'Which index is considered the best indicator of the performance of the U.S. stock market?',
      options: ['NASDAQ Composite', 'S&P 500', 'Dow Jones Industrial Average', 'Russell 2000'],
      answer: 'S&P 500'
    },
    {
      question: 'What does EPS stand for in stock trading?',
      options: ['Earnings Per Share', 'Equity Per Share', 'Earnings Per Stock', 'Equity Per Stock'],
      answer: 'Earnings Per Share'
    },
    {
      question: 'What does the term "dividend" refer to?',
      options: ['A company\'s earnings distributed to shareholders', 'A company\'s retained earnings', 'The price of a company\'s stock', 'The market value of a company\'s shares'],
      answer: 'A company\'s earnings distributed to shareholders'
    },
    {
      question: 'Which of the following is the largest technology company by market capitalization?',
      options: ['Apple', 'Microsoft', 'Google', 'Amazon'],
      answer: 'Apple'
    },
    {
      question: 'What is the primary role of a stockbroker?',
      options: ['To provide investment advice', 'To execute buy and sell orders for stocks', 'To manage mutual funds', 'To analyze financial statements'],
      answer: 'To execute buy and sell orders for stocks'
    },
    {
      question: 'What is an index fund?',
      options: ['A fund that aims to replicate the performance of a specific index', 'A fund that invests in stocks and bonds', 'A fund that focuses on high-risk investments', 'A fund that aims to beat the market'],
      answer: 'A fund that aims to replicate the performance of a specific index'
    },
    {
      question: 'What is a "short sale"?',
      options: ['Buying a stock with the intention of selling it later at a higher price', 'Selling a stock you don\'t own with the intention of buying it back later at a lower price', 'Selling a stock for a short period of time', 'Buying a stock for a short period of time'],
      answer: 'Selling a stock you don\'t own with the intention of buying it back later at a lower price'
    },
    {
      question: 'Which financial ratio indicates a company\'s ability to pay short-term liabilities with short-term assets?',
      options: ['Debt-to-equity ratio', 'Current ratio', 'P/E ratio', 'Return on equity'],
      answer: 'Current ratio'
    },
    {
      question: 'What is the term for the profit made from selling a stock at a higher price than it was bought?',
      options: ['Dividend', 'Capital Gain', 'Return on Investment', 'Earnings Per Share'],
      answer: 'Capital Gain'
    },
    {
      question: 'What does the term "market capitalization" mean?',
      options: ['The total value of a company\'s outstanding shares', 'The total revenue of a company', 'The net profit of a company', 'The total assets of a company'],
      answer: 'The total value of a company\'s outstanding shares'
    },
    {
      question: 'What does the term "liquidity" refer to in the stock market?',
      options: ['The amount of cash a company has on hand', 'The ease with which an asset can be converted into cash', 'The profitability of a company', 'The market value of a company\'s shares'],
      answer: 'The ease with which an asset can be converted into cash'
    },
    {
      question: 'What is a "mutual fund"?',
      options: ['A fund that pools money from multiple investors to buy securities', 'A fund that invests in mutual agreements', 'A fund that is managed by individual investors', 'A fund that focuses on short-term investments'],
      answer: 'A fund that pools money from multiple investors to buy securities'
    },
    {
      question: 'Which of the following is a defensive stock?',
      options: ['Technology company', 'Pharmaceutical company', 'Energy company', 'Food and beverage company'],
      answer: 'Food and beverage company'
    },
    {
      question: 'What is the main goal of a growth investor?',
      options: ['To find undervalued stocks with high dividend yields', 'To find stocks that are expected to grow at an above-average rate', 'To find stable stocks with low risk', 'To find stocks that provide a steady income'],
      answer: 'To find stocks that are expected to grow at an above-average rate'
    },
    {
      question: 'What is the term for a market characterized by rising stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bull Market'
    },
    {
      question: 'What is the term for a market characterized by falling stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bear Market'
    },
    {
      question: 'Which of the following is a measure of stock market volatility?',
      options: ['P/E ratio', 'EPS', 'VIX', 'ROE'],
      answer: 'VIX'
    },
    {
      question: 'What is the primary purpose of a stock market?',
      options: ['To buy and sell goods', 'To buy and sell shares of companies', 'To buy and sell real estate', 'To buy and sell commodities'],
      answer: 'To buy and sell shares of companies'
    },
    {
      question: 'Which of the following is considered a blue-chip stock?',
      options: ['Tesla', 'Facebook', 'Amazon', 'IBM'],
      answer: 'IBM'
    },
    {
      question: 'What does P/E ratio stand for in stock trading?',
      options: ['Price/Earnings ratio', 'Profit/Earnings ratio', 'Price/Equity ratio', 'Profit/Equity ratio'],
      answer: 'Price/Earnings ratio'
    },
    {
      question: 'What is the term for a market characterized by rising stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bull Market'
    },
    {
      question: 'What is the primary function of the Securities and Exchange Commission (SEC)?',
      options: ['Regulate banks', 'Regulate stock exchanges', 'Protect investors', 'Manage federal budget'],
      answer: 'Protect investors'
    },
    {
      question: 'What does the term "market capitalization" mean?',
      options: ['The total value of a company\'s outstanding shares', 'The total revenue of a company', 'The net profit of a company', 'The total assets of a company'],
      answer: 'The total value of a company\'s outstanding shares'
    },
    {
      question: 'Who is known as the "Oracle of Omaha"?',
      options: ['Jeff Bezos', 'Bill Gates', 'Warren Buffett', 'Elon Musk'],
      answer: 'Warren Buffett'
    },
    {
      question: 'What is a "bull market"?',
      options: ['A market where prices are falling', 'A market where prices are rising', 'A market with no changes in prices', 'A market that is stagnant'],
      answer: 'A market where prices are rising'
    },
    {
      question: 'What is a "bear market"?',
      options: ['A market where prices are falling', 'A market where prices are rising', 'A market with no changes in prices', 'A market that is stagnant'],
      answer: 'A market where prices are falling'
    },
    {
      question: 'What does the term "beta" refer to in stock trading?',
      options: ['A measure of a stock\'s volatility relative to the overall market', 'A measure of a company\'s profitability', 'A measure of a company\'s liquidity', 'A measure of a stock\'s dividend yield'],
      answer: 'A measure of a stock\'s volatility relative to the overall market'
    },
    {
      question: 'What is the main goal of a growth investor?',
      options: ['To find undervalued stocks with high dividend yields', 'To find stocks that are expected to grow at an above-average rate', 'To find stable stocks with low risk', 'To find stocks that provide a steady income'],
      answer: 'To find stocks that are expected to grow at an above-average rate'
    },
    {
      question: 'Which index is considered the best indicator of the performance of the U.S. stock market?',
      options: ['NASDAQ Composite', 'S&P 500', 'Dow Jones Industrial Average', 'Russell 2000'],
      answer: 'S&P 500'
    },
    {
      question: 'What is a "stock split"?',
      options: ['When a company issues more shares to existing shareholders', 'When a company reduces the number of its outstanding shares', 'When a company merges with another company', 'When a company buys back its own shares'],
      answer: 'When a company issues more shares to existing shareholders'
    },
    {
      question: 'What is a stock\'s "beta"?',
      options: ['A measure of a stock\'s volatility relative to the overall market', 'A measure of a company\'s profitability', 'A measure of a company\'s liquidity', 'A measure of a stock\'s dividend yield'],
      answer: 'A measure of a stock\'s volatility relative to the overall market'
    },
    {
      question: 'What does the term "liquidity" refer to in the stock market?',
      options: ['The amount of cash a company has on hand', 'The ease with which an asset can be converted into cash', 'The profitability of a company', 'The market value of a company\'s shares'],
      answer: 'The ease with which an asset can be converted into cash'
    },
    {
      question: 'What is the term for a market characterized by rising stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bull Market'
    },
    {
      question: 'What is the primary role of the Federal Reserve in the United States?',
      options: ['To regulate the stock market', 'To manage the country\'s money supply and interest rates', 'To oversee the banking industry', 'To provide loans to businesses'],
      answer: 'To manage the country\'s money supply and interest rates'
    },
    {
      question: 'Which of the following is NOT a major U.S. stock exchange?',
      options: ['NASDAQ', 'NYSE', 'AMEX', 'FTSE'],
      answer: 'FTSE'
    },
    {
      question: 'What is the primary goal of a value investor?',
      options: ['To find stocks that are undervalued relative to their intrinsic value', 'To find stocks with high growth potential', 'To find stocks with high dividend yields', 'To find stocks in the technology sector'],
      answer: 'To find stocks that are undervalued relative to their intrinsic value'
    },
    {
      question: 'Which of the following is a defensive stock?',
      options: ['Technology company', 'Pharmaceutical company', 'Energy company', 'Food and beverage company'],
      answer: 'Food and beverage company'
    },
    {
      question: 'What is the primary role of a stockbroker?',
      options: ['To provide investment advice', 'To execute buy and sell orders for stocks', 'To manage mutual funds', 'To analyze financial statements'],
      answer: 'To execute buy and sell orders for stocks'
    },
    {
      question: 'What does the term "market capitalization" mean?',
      options: ['The total value of a company\'s outstanding shares', 'The total revenue of a company', 'The net profit of a company', 'The total assets of a company'],
      answer: 'The total value of a company\'s outstanding shares'
    },
    {
      question: 'What does the term "buy and hold" refer to?',
      options: ['Buying stocks and holding them for the long term', 'Buying stocks and selling them the same day', 'Buying stocks and selling them within a week', 'Buying stocks and holding them for a short period'],
      answer: 'Buying stocks and holding them for the long term'
    },
    {
      question: 'What is a "mutual fund"?',
      options: ['A fund that pools money from multiple investors to buy securities', 'A fund that invests in mutual agreements', 'A fund that is managed by individual investors', 'A fund that focuses on short-term investments'],
      answer: 'A fund that pools money from multiple investors to buy securities'
    },
    {
      question: 'What is the term for a profit made from selling a stock at a higher price than it was bought?',
      options: ['Dividend', 'Capital Gain', 'Return on Investment', 'Earnings Per Share'],
      answer: 'Capital Gain'
    },
    {
      question: 'What is the primary goal of a growth investor?',
      options: ['To find undervalued stocks with high dividend yields', 'To find stocks that are expected to grow at an above-average rate', 'To find stable stocks with low risk', 'To find stocks that provide a steady income'],
      answer: 'To find stocks that are expected to grow at an above-average rate'
    },
    {
      question: 'What is the primary purpose of a stock market?',
      options: ['To buy and sell goods', 'To buy and sell shares of companies', 'To buy and sell real estate', 'To buy and sell commodities'],
      answer: 'To buy and sell shares of companies'
    },
    {
      question: 'What does the term "liquidity" refer to in the stock market?',
      options: ['The amount of cash a company has on hand', 'The ease with which an asset can be converted into cash', 'The profitability of a company', 'The market value of a company\'s shares'],
      answer: 'The ease with which an asset can be converted into cash'
    },
    {
      question: 'What is the primary role of the Federal Reserve in the United States?',
      options: ['To regulate the stock market', 'To manage the country\'s money supply and interest rates', 'To oversee the banking industry', 'To provide loans to businesses'],
      answer: 'To manage the country\'s money supply and interest rates'
    },
    {
      question: 'Which of the following is a common characteristic of a value stock?',
      options: ['High P/E ratio', 'High growth potential', 'Undervalued relative to its fundamentals', 'High dividend payout'],
      answer: 'Undervalued relative to its fundamentals'
    },
    {
      question: 'What does P/E ratio stand for?',
      options: ['Price/Earnings ratio', 'Profit/Earnings ratio', 'Price/Equity ratio', 'Profit/Equity ratio'],
      answer: 'Price/Earnings ratio'
    },
    {
      question: 'What is the primary role of a stockbroker?',
      options: ['To provide investment advice', 'To execute buy and sell orders for stocks', 'To manage mutual funds', 'To analyze financial statements'],
      answer: 'To execute buy and sell orders for stocks'
    },
    {
      question: 'What is the term for the profit made from selling a stock at a higher price than it was bought?',
      options: ['Dividend', 'Capital Gain', 'Return on Investment', 'Earnings Per Share'],
      answer: 'Capital Gain'
    },
    {
      question: 'Which of the following represents ownership in a company?',
      options: ['Bonds', 'Stocks', 'Mutual Funds', 'Options'],
      answer: 'Stocks'
    },
    {
      question: 'What is the primary role of a stockbroker?',
      options: ['To provide investment advice', 'To execute buy and sell orders for stocks', 'To manage mutual funds', 'To analyze financial statements'],
      answer: 'To execute buy and sell orders for stocks'
    },
    {
      question: 'What is the primary goal of a value investor?',
      options: ['To find stocks that are undervalued relative to their intrinsic value', 'To find stocks with high growth potential', 'To find stocks with high dividend yields', 'To find stocks in the technology sector'],
      answer: 'To find stocks that are undervalued relative to their intrinsic value'
    },
    {
      question: 'What does the term "buy and hold" refer to?',
      options: ['Buying stocks and holding them for the long term', 'Buying stocks and selling them the same day', 'Buying stocks and selling them within a week', 'Buying stocks and holding them for a short period'],
      answer: 'Buying stocks and holding them for the long term'
    },
    {
      question: 'What is a "mutual fund"?',
      options: ['A fund that pools money from multiple investors to buy securities', 'A fund that invests in mutual agreements', 'A fund that is managed by individual investors', 'A fund that focuses on short-term investments'],
      answer: 'A fund that pools money from multiple investors to buy securities'
    },
    {
      question: 'Which of the following is considered a blue-chip stock?',
      options: ['Tesla', 'Facebook', 'Amazon', 'IBM'],
      answer: 'IBM'
    },
    {
      question: 'What does EPS stand for in stock trading?',
      options: ['Earnings Per Share', 'Equity Per Share', 'Earnings Per Stock', 'Equity Per Stock'],
      answer: 'Earnings Per Share'
    },
    {
      question: 'Which company is known as the "Big Blue"?',
      options: ['Microsoft', 'IBM', 'Google', 'Apple'],
      answer: 'IBM'
    },
    {
      question: 'What does the term "dividend" refer to?',
      options: ['A company\'s earnings distributed to shareholders', 'A company\'s retained earnings', 'The price of a company\'s stock', 'The market value of a company\'s shares'],
      answer: 'A company\'s earnings distributed to shareholders'
    },
    {
      question: 'What does ETF stand for in finance?',
      options: ['Exchange Traded Fund', 'Equity Traded Fund', 'Exchange Trade Facility', 'Equity Trade Facility'],
      answer: 'Exchange Traded Fund'
    },
    {
      question: 'Which company had the largest IPO in history?',
      options: ['Alibaba', 'Facebook', 'Visa', 'Uber'],
      answer: 'Alibaba'
    },
    {
      question: 'What is the primary function of the Securities and Exchange Commission (SEC)?',
      options: ['Regulate banks', 'Regulate stock exchanges', 'Protect investors', 'Manage federal budget'],
      answer: 'Protect investors'
    },
    {
      question: 'Who is the founder of Amazon?',
      options: ['Steve Jobs', 'Elon Musk', 'Jeff Bezos', 'Mark Zuckerberg'],
      answer: 'Jeff Bezos'
    },
    {
      question: 'What does the term "bull market" refer to?',
      options: ['Market going down', 'Market going up', 'Stable market', 'Volatile market'],
      answer: 'Market going up'
    },
    {
      question: 'What is a "bear market"?',
      options: ['Market going down', 'Market going up', 'Stable market', 'Volatile market'],
      answer: 'Market going down'
    },
    {
      question: 'What does P/E ratio stand for?',
      options: ['Price/Earnings ratio', 'Profit/Earnings ratio', 'Price/Equity ratio', 'Profit/Equity ratio'],
      answer: 'Price/Earnings ratio'
    },
    {
      question: 'Which index is considered the best indicator of the performance of the U.S. stock market?',
      options: ['NASDAQ Composite', 'S&P 500', 'Dow Jones Industrial Average', 'Russell 2000'],
      answer: 'S&P 500'
    },
    {
      question: 'What does EPS stand for in stock trading?',
      options: ['Earnings Per Share', 'Equity Per Share', 'Earnings Per Stock', 'Equity Per Stock'],
      answer: 'Earnings Per Share'
    },
    {
      question: 'What does the term "dividend" refer to?',
      options: ['A company\'s earnings distributed to shareholders', 'A company\'s retained earnings', 'The price of a company\'s stock', 'The market value of a company\'s shares'],
      answer: 'A company\'s earnings distributed to shareholders'
    },
    {
      question: 'Which of the following is the largest technology company by market capitalization?',
      options: ['Apple', 'Microsoft', 'Google', 'Amazon'],
      answer: 'Apple'
    },
    {
      question: 'What is the primary role of a stockbroker?',
      options: ['To provide investment advice', 'To execute buy and sell orders for stocks', 'To manage mutual funds', 'To analyze financial statements'],
      answer: 'To execute buy and sell orders for stocks'
    },
    {
      question: 'What is an index fund?',
      options: ['A fund that aims to replicate the performance of a specific index', 'A fund that invests in stocks and bonds', 'A fund that focuses on high-risk investments', 'A fund that aims to beat the market'],
      answer: 'A fund that aims to replicate the performance of a specific index'
    },
    {
      question: 'What is a "short sale"?',
      options: ['Buying a stock with the intention of selling it later at a higher price', 'Selling a stock you don\'t own with the intention of buying it back later at a lower price', 'Selling a stock for a short period of time', 'Buying a stock for a short period of time'],
      answer: 'Selling a stock you don\'t own with the intention of buying it back later at a lower price'
    },
    {
      question: 'Which financial ratio indicates a company\'s ability to pay short-term liabilities with short-term assets?',
      options: ['Debt-to-equity ratio', 'Current ratio', 'P/E ratio', 'Return on equity'],
      answer: 'Current ratio'
    },
    {
      question: 'What is the term for the profit made from selling a stock at a higher price than it was bought?',
      options: ['Dividend', 'Capital Gain', 'Return on Investment', 'Earnings Per Share'],
      answer: 'Capital Gain'
    },
    {
      question: 'What does the term "market capitalization" mean?',
      options: ['The total value of a company\'s outstanding shares', 'The total revenue of a company', 'The net profit of a company', 'The total assets of a company'],
      answer: 'The total value of a company\'s outstanding shares'
    },
    {
      question: 'What does the term "liquidity" refer to in the stock market?',
      options: ['The amount of cash a company has on hand', 'The ease with which an asset can be converted into cash', 'The profitability of a company', 'The market value of a company\'s shares'],
      answer: 'The ease with which an asset can be converted into cash'
    },
    {
      question: 'What is a "mutual fund"?',
      options: ['A fund that pools money from multiple investors to buy securities', 'A fund that invests in mutual agreements', 'A fund that is managed by individual investors', 'A fund that focuses on short-term investments'],
      answer: 'A fund that pools money from multiple investors to buy securities'
    },
    {
      question: 'Which of the following is a defensive stock?',
      options: ['Technology company', 'Pharmaceutical company', 'Energy company', 'Food and beverage company'],
      answer: 'Food and beverage company'
    },
    {
      question: 'What is the main goal of a growth investor?',
      options: ['To find undervalued stocks with high dividend yields', 'To find stocks that are expected to grow at an above-average rate', 'To find stable stocks with low risk', 'To find stocks that provide a steady income'],
      answer: 'To find stocks that are expected to grow at an above-average rate'
    },
    {
      question: 'What is the term for a market characterized by rising stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bull Market'
    },
    {
      question: 'What is the term for a market characterized by falling stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bear Market'
    },
    {
      question: 'Which of the following is a measure of stock market volatility?',
      options: ['P/E ratio', 'EPS', 'VIX', 'ROE'],
      answer: 'VIX'
    },
    {
      question: 'What is the primary purpose of a stock market?',
      options: ['To buy and sell goods', 'To buy and sell shares of companies', 'To buy and sell real estate', 'To buy and sell commodities'],
      answer: 'To buy and sell shares of companies'
    },
    {
      question: 'Which of the following is considered a blue-chip stock?',
      options: ['Tesla', 'Facebook', 'Amazon', 'IBM'],
      answer: 'IBM'
    },
    {
      question: 'What does P/E ratio stand for in stock trading?',
      options: ['Price/Earnings ratio', 'Profit/Earnings ratio', 'Price/Equity ratio', 'Profit/Equity ratio'],
      answer: 'Price/Earnings ratio'
    },
    {
      question: 'What is the term for a market characterized by rising stock prices?',
      options: ['Bull Market', 'Bear Market', 'Stag Market', 'Pig Market'],
      answer: 'Bull Market'
    },
    {
      question: 'What is the primary function of the Securities and Exchange Commission (SEC)?',
      options: ['Regulate banks', 'Regulate stock exchanges', 'Protect investors', 'Manage federal budget'],
      answer: 'Protect investors'
    },
    {
      question: 'What does the term "market capitalization" mean?',
      options: ['The total value of a company\'s outstanding shares', 'The total revenue of a company', 'The net profit of a company', 'The total assets of a company'],
      answer: 'The total value of a company\'s outstanding shares'
    },
    {
      question: 'Who is known as the "Oracle of Omaha"?',
      options: ['Jeff Bezos', 'Bill Gates', 'Warren Buffett', 'Elon Musk'],
      answer: 'Warren Buffett'
    },
    {
      question: 'What is a "bull market"?',
      options: ['A market where prices are falling', 'A market where prices are rising', 'A market with no changes in prices', 'A market that is stagnant'],
      answer: 'A market where prices are rising'
    },
    {
      question: 'What is a "bear market"?',
      options: ['A market where prices are falling', 'A market where prices are rising', 'A market with no changes in prices', 'A market that is stagnant'],
      answer: 'A market where prices are falling'
    },
  
  ];
  
  export default triviaData;