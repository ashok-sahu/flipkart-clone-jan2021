const path = require("path");
const router = require("express").Router();
const {
  createProduct,
  getProductDetailsById,
  getProducts,
  getProductsBySlug,
  deleteProductById
} = require("../../controllers/product/product.controller");
const multer = require("multer");
const shortid = require("shortid");

const {
  adminMiddleware,
  requireSignIn,
  uploadS3,
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
  adminMiddleware,
  // uploadS3.array("productPicture"),
  createProduct
);
router.get("/:slug", getProductsBySlug);
//router.get('/category/getcategory', getCategories);
router.get("/:productId", getProductDetailsById);
router.delete(
  "/deleteProductById",
  requireSignIn,
  adminMiddleware,
  deleteProductById
);
router.post(
  "/getProducts",
  requireSignIn,
  adminMiddleware,
  getProducts
);

module.exports = router;
