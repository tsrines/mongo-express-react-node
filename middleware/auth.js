const jwt = require('jsonwebtoken');
const config = require('config');
module.exports = async function (req, res, next) {
  // get token from head
  const token = await req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token' });
  }
  // check if no token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
