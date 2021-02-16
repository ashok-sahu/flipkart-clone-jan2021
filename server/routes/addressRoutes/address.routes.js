const router = require("express").Router();
const {
  requireSignIn,
  userMiddleware,
} = require("../../middlewares/auth.middleware");
const {
  getAddress,
  addAddress,
} = require("../../controllers/address/address.controller");

router.post('/address/create', requireSignIn, userMiddleware, addAddress);
router.post('/getaddress', requireSignIn, userMiddleware, getAddress);


module.exports = router;
