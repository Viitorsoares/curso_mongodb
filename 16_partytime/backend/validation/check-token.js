const jwt = require("jsonwebtoken");

// middleware to validate token
const checkToken = (req, res, next) => {

  const token = req.header("auth-token");

  if (!token) return res.status(401).json({ error: "Acesso negado!" });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next(); // to continue the flow
  } catch (err) {
    res.status(400).json({ error: "O Token é inválido!" });
  }

};

module.exports = checkToken;