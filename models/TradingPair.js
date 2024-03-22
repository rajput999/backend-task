// models/TradingPair.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define schema for base token
const BaseTokenSchema = new Schema({
  address: String,
  name: String,
  symbol: String
});

// Define schema for quote token
const QuoteTokenSchema = new Schema({
  address: String,
  name: String,
  symbol: String
});

// Define schema for social media links
const SocialMediaSchema = new Schema({
  type: String,
  url: String
});

// Define schema for websites
const WebsiteSchema = new Schema({
  label: String,
  url: String
});

const TradingPairSchema = new Schema({
  chainId: String,
  dexId: String,
  url: String,
  pairAddress: String,
  baseToken: BaseTokenSchema,
  quoteToken: QuoteTokenSchema,
  priceNative: String,
  priceUsd: String,
  txns: {
    m5: { buys: Number, sells: Number },
    h1: { buys: Number, sells: Number },
    h6: { buys: Number, sells: Number },
    h24: { buys: Number, sells: Number }
  },
  volume: {
    h24: Number,
    h6: Number,
    h1: Number,
    m5: Number
  },
  priceChange: {
    m5: Number,
    h1: Number,
    h6: Number,
    h24: Number
  },
  liquidity: {
    usd: Number,
    base: Number,
    quote: Number
  },
  pairCreatedAt: Number,
  info: {
    imageUrl: String,
    websites: [WebsiteSchema],
    socials: [SocialMediaSchema]
  }
});

// Compile schema into a model
const TradingPair = mongoose.model('TradingPair', TradingPairSchema);

module.exports = TradingPair;
