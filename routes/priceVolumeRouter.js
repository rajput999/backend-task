// routes/priceVolumeRouter.js
const express = require('express');
const router = express.Router();
const priceVolumeController = require('../controllers/priceVolumeController');

router.get('/price', priceVolumeController.getAllPrices);
router.get('/volume', priceVolumeController.getAllVolumes);

module.exports = router;
