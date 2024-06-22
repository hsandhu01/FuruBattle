const express = require('express');
const { createCompetition, getCompetitions, joinCompetition } = require('../controllers/competitionController');
const authMiddleware = require('../utils/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createCompetition);
router.get('/', authMiddleware, getCompetitions);
router.put('/:id/join', authMiddleware, joinCompetition);

module.exports = router;