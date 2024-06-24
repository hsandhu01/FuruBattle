const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const stockRoutes = require('./routes/stockRoutes');
const triviaRoutes = require('./routes/triviaRoutes');
const tradeRoutes = require('./routes/tradeRoutes');
const competitionRoutes = require('./routes/competitionRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/trivia', triviaRoutes);
app.use('/api/trades', tradeRoutes);
app.use('/api/competitions', competitionRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/portfolio', portfolioRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));