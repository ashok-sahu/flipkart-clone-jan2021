const router = require("express").Router();

//all routes
const authRoute = require("./authRoutes/auth.routes");
const userRoute = require("./userRoutes/user.routes");
const adminRoute = require("./adminRoutes/admin.auth.routes");
// const initialDataRoute = require("./adminRoutes/admin.initilaData.routes");
const orderControllerRoute = require("./adminRoutes/admin.order.routes");
const pageControllerRoute = require("./adminRoutes/admin.page.routes");
const categoryRoute = require("./categoryRoutes/category.routes");
const productRoute = require("./productRoutes/product.routes");
const cartRoute = require("./cartRoutes/cart.Routes");
const orderRoute = require("./orderRoutes/order.routes");
const addressRoute = require("./addressRoutes/address.routes");

//route paths
router.use("/", orderControllerRoute);
router.use("/", pageControllerRoute);

/*  USER ROUTES  */
router.use("/user", addressRoute);
router.use("/user", cartRoute);
router.use("/user", userRoute);
router.use("/user", orderRoute);

router.use("/auth", authRoute);

router.use("/admin", adminRoute);
// router.use("/admin", initialDataRoute);

router.use("/category", categoryRoute);
router.use("/product", productRoute);

module.exports = router;
