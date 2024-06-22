const express = require('express');
const { getTrades, addTrade } = require('../controllers/tradeController');
const authMiddleware = require('../utils/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getTrades);
router.post('/', authMiddleware, addTrade);

module.exports = router;