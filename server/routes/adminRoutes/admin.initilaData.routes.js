const router = require("express").Router();
const {
  adminMiddleware,
  requireSignIn,
} = require("../../middlewares/auth.middleware");
const initialData = require("../../controllers/admin/initialData");

router.post("/initial", adminMiddleware, requireSignIn, initialData);

module.exports = router;
