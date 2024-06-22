const express = require('express');
const { getLeaderboard } = require('../controllers/leaderboardController');
const authMiddleware = require('../utils/authMiddleware');
const router = express.Router();

router.get('/:id', authMiddleware, getLeaderboard);

module.exports = router;