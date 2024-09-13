const express = require('express');
const Stock = require('../models/stocks');
const router = express.Router();

// API to fetch stock data for a specific symbol and date
router.get('/:symbol/:date', async (req, res) => {
  try {
    const { symbol, date } = req.params;
    const stockData = await Stock.find({
      symbol,
      time: {
        $gte: new Date(`${date}T00:00:00`),
        $lte: new Date(`${date}T23:59:59`),
      },
    });
    res.json(stockData);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching stock data' });
  }
});

// API to fetch the latest stock data for a specific symbol
router.get('/latest/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const stockData = await Stock.findOne({ symbol }).sort({ time: -1 });
    res.json(stockData);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching latest stock data' });
  }
});

// API to fetch all stock data
router.get('/', async (req, res) => {
  try {
    const stockData = await Stock.find();
    res.json(stockData);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching stock data' });
  }
});

module.exports = router;
