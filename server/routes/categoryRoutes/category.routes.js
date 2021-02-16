const path = require("path");
const multer = require("multer");
const shortid = require("shortid");
const router = require("express").Router();
const {
  getCategories,
  addCategory,
  updateCategories,
  deleteCategories,
} = require("../../controllers/category/category.controller");
const {
  adminMiddleware,
  requireSignIn,
  superAdminMiddleware
} = require("../../middlewares/auth.middleware");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/create",
  requireSignIn,
  superAdminMiddleware,
  upload.single("categoryImage"),
  addCategory
);
router.get("/getcategory", getCategories);
router.post(
  "/update",
  requireSignIn,
  superAdminMiddleware,
  upload.array("categoryImage"),
  updateCategories
);
router.post(
  "/delete",
  requireSignIn,
  superAdminMiddleware,
  deleteCategories
);

module.exports = router;
