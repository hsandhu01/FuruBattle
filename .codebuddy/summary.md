## Project Summary

### Languages, Frameworks, and Main Libraries Used
- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Firebase Authentication
- **Frontend**:
  - React
  - React Router
  - Bootstrap
- **Other Libraries**:
  - Axios
  - Bcryptjs
  - Jsonwebtoken
  - Alpha Vantage API

### Purpose of the Project
The project is a stock investing competition platform where users can simulate stock trading, manage their portfolios, add trades, view leaderboards, and compete in various competitions. It includes user registration, authentication, backend API with Node.js and Express, MongoDB for data storage, and frontend with React.

### Configuration and Building Files
- **Backend**:
  - **Package.json**: /backend/package.json
  - **DB Configuration**: /backend/config/db.js
- **Frontend**:
  - **Package.json**: /frontend/package.json
  - **Firebase Configuration**: /frontend/src/firebase.js

### Source Files
- **Backend**:
  - **Controllers**:
    - Auth Controller: /backend/controllers/authController.js
  - **Models**:
    - Competition Model: /backend/models/Competition.js
  - **Routes**:
    - Auth Routes: /backend/routes/authRoutes.js
  - **Services**:
    - AlphaVantage Service: /backend/services/alphaVantage.js
- **Frontend**:
  - **Components**:
    - Add Trade Component: /frontend/src/components/AddTrade.js
  - **App Component**: /frontend/src/App.js

### Documentation Files
- **Frontend**:
  - README.md: /frontend/README.md