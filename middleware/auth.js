//Anytime need to protect a route, use this middleware

const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //Get the token from header
  //"x-auth-token"is to check if token in the header
  const token = req.header("x-auth-token");

  //Check if not token
  if (!token) {
    //status 401 for not authoration
    return res.status(401).json({ msg: "No token, authoriation denied" });
  }

  try {
    //This decode has userID
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    //The format of decoded.user is like
    //"user": {"id": "5d5f8b368553f368d1ac115f"}
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
