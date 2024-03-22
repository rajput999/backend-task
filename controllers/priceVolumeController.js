// controllers/priceVolumeController.js
const TradingPair = require('../models/TradingPair');

const getAllPrices = async (req, res) => {
  try {
    const prices = await TradingPair.find({}, 'priceNative priceUsd');
    res.json(prices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllVolumes = async (req, res) => {
  try {
    const volumes = await TradingPair.find({}, 'volume');
    res.json(volumes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllPrices, getAllVolumes };
