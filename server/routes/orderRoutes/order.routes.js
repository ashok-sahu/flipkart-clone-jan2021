const router = require("express").Router();
const {
  requireSignIn,
  userMiddleware,
} = require("../../middlewares/auth.middleware");
const {
  addOrder,
  getOrder,
  getOrders,
} = require("../../controllers/order/order.controller");

router.post("/addOrder", requireSignIn, userMiddleware, addOrder);
router.get("/getOrders", requireSignIn, userMiddleware, getOrders);
router.post("/getOrder", requireSignIn, userMiddleware, getOrder);

module.exports = router;
