const express = require('express');
const { getTrivia, addTrivia } = require('../controllers/triviaController');
const router = express.Router();

router.get('/', getTrivia);
router.post('/', addTrivia);

module.exports = router;