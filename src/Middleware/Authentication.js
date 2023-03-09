//__________________________ Importing Module ___________________________________________

const jwt = require("jsonwebtoken");
const errorhandler = require('../ErrorHendler/errorhandler')
//__________________________ authentication ___________________________________________

const authentication = function (req, res, next) {
  try {
    let bearerHeader = req.headers.authorization;
    if (typeof bearerHeader == "undefined")
      return res
        .status(400)
        .send({
          status: false,
          message: "Token is missing, please enter a token",
        });

    let bearerToken = bearerHeader.split(" ");
    let token = bearerToken[1];
    let decodedToken  = jwt.verify(token, "Pratham");
    req.decodedToken = decodedToken.User
    next();
  } catch (err) {
    return errorhandler(err ,res)
  }
};

//__________________________ authorization ___________________________________________

const authorization = function (req, res, next) {
  try {
    const UserId = req.params.UserId
    if (req.decodedToken != UserId) {
      return res
        .status(400)
        .send({ status: false, msg: "You are not Valid User" });
    }
    next();
  } catch (err) {
    return errorhandler(err ,res)
  }
};

//__________________________ Exporting Module ___________________________________________

module.exports = { authentication, authorization };
