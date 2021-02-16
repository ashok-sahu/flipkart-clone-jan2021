const router = require("express").Router();
const { AddtoCart } = require("../../controllers/cart/cart.controller");
const {
  userMiddleware,
  requireSignIn,
} = require("../../middlewares/auth.middleware");

router.post("/cart/addTocart", requireSignIn, userMiddleware, AddtoCart);

module.exports = router;
