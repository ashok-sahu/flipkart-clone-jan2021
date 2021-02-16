const router = require("express").Router();
const { requireSignIn } = require("../../middlewares/auth.middleware");
const { profile } = require("../../controllers/user/user.controller");

router.post("/profile", requireSignIn, profile);

module.exports = router;
