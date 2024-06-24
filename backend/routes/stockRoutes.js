const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

router.get('/history/:symbol', stockController.getStockHistory);

module.exports = router;