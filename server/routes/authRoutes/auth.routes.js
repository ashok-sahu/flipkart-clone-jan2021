const router = require("express").Router();
const { signup, signin } = require("../../controllers/auth/auth.controller");
const {
  isRequestValidated,
  checkUserSignIn,
  checkUserSignUp,
} = require("../../validators/Auth.validator");

router
  .post("/signup", checkUserSignUp, isRequestValidated, signup)
  .post("/signin", checkUserSignIn, isRequestValidated, signin);

module.exports = router;
