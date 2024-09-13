const yf = require('yahoo-finance2').default;

const fetchNiftyStocks = async () => {
  try {
    const nifty50Symbols = ['RELIANCE.NS', 'TCS.NS', 'INFY.NS', /* Add more NIFTY50 stocks */];
    const stockData = await Promise.all(
      nifty50Symbols.map(symbol => yf.quote(symbol, { modules: ['price', 'summaryDetail'] }))
    );
    return stockData;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return [];
  }
};

module.exports = { fetchNiftyStocks };
