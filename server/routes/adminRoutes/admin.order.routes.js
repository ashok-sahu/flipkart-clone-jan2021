const router = require("express").Router();
const {
  adminMiddleware,
  requireSignIn,
} = require("../../middlewares/auth.middleware");
const {
  updateOrder,
  getCustomerOrders,
} = require("../../controllers/admin/order.adminController");

router.post(`/order/update`, requireSignIn, adminMiddleware, updateOrder);
router.post(
  `/order/getCustomerOrders`,
  requireSignIn,
  adminMiddleware,
  getCustomerOrders
);

module.exports = router;
