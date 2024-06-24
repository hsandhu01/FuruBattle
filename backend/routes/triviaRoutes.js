const express = require('express');
const router = express.Router();
const triviaController = require('../controllers/triviaController');

router.get('/questions', triviaController.getTriviaQuestions);

module.exports = router;