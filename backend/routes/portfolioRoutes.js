const express = require('express');
const { getPortfolio } = require('../controllers/portfolioController');
const authMiddleware = require('../utils/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getPortfolio);

module.exports = router;