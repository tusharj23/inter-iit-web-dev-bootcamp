const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  time: { type: Date, default: Date.now },
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
