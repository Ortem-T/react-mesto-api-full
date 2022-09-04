const jwt = require('jsonwebtoken');
const AuthErr = require('../errors/AuthErr_401');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if (!authorization) {
    throw new AuthErr('Необходима авторизация');
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    throw new AuthErr('Необходима авторизация');
  }

  req.user = payload;
  next();
};
