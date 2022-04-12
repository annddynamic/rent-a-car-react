const jwt = require("jsonwebtoken");

const validate =(req, res, next) =>{

  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    var tokensecret = process.env.JWTPRIVATEKEY;

    const verified = jwt.verify(token, tokensecret);
    req.user = verified;
    next(); // to continue the flow
  } catch (err) {
    res.status(403).json({ error: "Token is not valid" });
  }
}

module.exports = validate