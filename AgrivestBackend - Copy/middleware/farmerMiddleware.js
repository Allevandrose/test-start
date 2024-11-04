const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const farmerauthenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, farmer) => {
    if (err) return res.sendStatus(403);
    req.farmer = farmer;
    next();
  });
};

module.exports = farmerauthenticateToken;
