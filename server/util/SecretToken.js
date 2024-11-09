require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY="menaka", {
    expiresIn: 3 * 24 * 60 * 60, // Expiry time in seconds
  });
};