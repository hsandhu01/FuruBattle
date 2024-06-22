const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log('Decoded token:', decoded); // Debugging statement
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};