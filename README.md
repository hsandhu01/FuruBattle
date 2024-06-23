# FuruBattle

FuruBattle is a stock investing competition platform where users can simulate stock trading and compete in various competitions. The platform allows users to register, log in, manage their portfolios, add trades, and view leaderboards.

## Features

- User Registration and Login
- Portfolio Management
- Add Trades (Buy/Sell)
- View Leaderboards
- Firebase Authentication Integration
- Backend API with Node.js and Express
- MongoDB for Data Storage
- Frontend with React

## Technologies Used

- **Frontend**: React, React Router, Bootstrap
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: Firebase Authentication
- **Stock Price API**: Alpha Vantage

## Installation

### Prerequisites

- Node.js
- MongoDB
- Firebase Project
- Alpha Vantage API Key

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/hsandhu01/FuruBattle.git
   cd FuruBattle

Install Backend Dependencies:
bashCopynpm install

Set Up Environment Variables:
Create a .env file in the root directory and add the following:
CopyMONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key

Start the Backend Server:
bashCopynpm run dev

Set Up Firebase:

Go to the Firebase Console.
Create a new project.
Enable Email/Password authentication (and any other authentication methods you want to use).
Get your Firebase configuration and replace the placeholders in src/firebase.js.


Install Frontend Dependencies:
bashCopycd frontend
npm install

Start the Frontend Development Server:
bashCopynpm start


API Endpoints
Authentication

Register User: POST /api/auth/register
Login User: POST /api/auth/login

Portfolio

Get Portfolio: GET /api/portfolio

Trades

Add Trade: POST /api/trades
Get Trades: GET /api/trades

Leaderboard

Get Leaderboard: GET /api/leaderboard/

Usage

Register a new user via the registration form.
Login with the registered user credentials.
Add trades to your portfolio by providing the stock symbol, quantity, and trade type (buy/sell).
View your portfolio to see your holdings and total value.
Join competitions and view the leaderboard to see how you rank against other users.

Contributing

Fork the repository.
Create a new branch: git checkout -b my-feature-branch
Make your changes and commit them: git commit -m 'Add some feature'
Push to the branch: git push origin my-feature-branch
Submit a pull request.

License
This project is licensed under the MIT License.