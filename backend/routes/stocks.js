const express = require('express');
const router = express.Router();
const { getStockHistory } = require('../controllers/stockController');
const auth = require('../middleware/authMiddleware');

router.get('/history/:symbol', auth, getStockHistory);

module.exports = router;