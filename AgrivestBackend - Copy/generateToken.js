const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET; // Use the same secret key

const payload = {
  id: Math.floor(Math.random() * 1000),
  name: 'Random User'
};

const token = jwt.sign(payload, secret, { expiresIn: '1h' });

console.log('Generated Token:', token);
