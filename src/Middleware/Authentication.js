//__________________________ Importing Module ___________________________________________

const jwt = require("jsonwebtoken");
const errorhandler = require('../ErrorHendler/errorhandler')
//__________________________ authentication ___________________________________________

const authentication = function (req, res, next) {
  try {
    let token = req.headers["x-api-key"];
    if (!token) {
      return res
        .status(400)
        .send({ status: false, msg: "Oooh... Please Provide a Token" });
    }
      let decodeToken = jwt.verify(token, "Pratham");
      if (!decodeToken) {
        return res
          .status(400)
          .send({ status: false, msg: "this is an invalid token" });
      }
      req.token = decodeToken;
    
    next();
  } catch (err) {
    return errorhandler(err ,res)
  }
};

//__________________________ authorization ___________________________________________

const authorization = function (req, res, next) {
  try {
    const UserId = req.query.UserId || req.body.UserId;
    if (req.token.UserId != UserId) {
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
