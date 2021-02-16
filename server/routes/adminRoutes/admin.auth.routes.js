const router = require("express").Router();
const {
  signup,
  signin,
  logout,
} = require("../../controllers/admin/auth.adminController");
const { profile } = require("../../controllers/user/user.controller");
const { requireSignIn } = require("../../middlewares/auth.middleware");
const {
  isRequestValidated,
  checkAdminSignIn,
  checkAdminSignUp,
} = require("../../validators/Auth.validator");

router
  .post("/signup", checkAdminSignUp, isRequestValidated, signup)//PORT 1
  .post("/signin", checkAdminSignIn, isRequestValidated, signin)//PORT 2
  .post("/logout", logout)//PORT 3
  .post("/profile", requireSignIn, profile);

module.exports = router;
