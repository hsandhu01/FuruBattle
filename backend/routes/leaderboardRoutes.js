const express = require('express');
const { saveScore, getLeaderboard } = require('../controllers/leaderboardController');
const authMiddleware = require('../utils/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, saveScore);
router.get('/', getLeaderboard);

module.exports = router;