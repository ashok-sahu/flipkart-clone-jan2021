const router = require("express").Router();
const {
  adminMiddleware,
  requireSignIn,
  upload,
} = require("../../middlewares/auth.middleware");
const {
  getPage,
  createPage,
} = require("../../controllers/admin/page.adminController");

router.post(
  `/page/create`,
  requireSignIn,
  adminMiddleware,
  upload.fields([{ name: "banners" }, { name: "products" }]),
  createPage
);

router.get(`/page/:category/:type`, getPage);
module.exports = router;
