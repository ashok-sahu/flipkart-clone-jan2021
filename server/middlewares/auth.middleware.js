const path = require("path");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const shortid = require("shortid");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

exports.requireSignIn = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = await req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } else {
    return res.send({
      message: "Authorization is Required",
    });
  }
  next();
};

const accessKeyId = process.env.accessKeyId;
const secretAccessKey = process.env.secretAccessKey;

const s3 = new aws.S3({
  accessKeyId,
  secretAccessKey,
});

exports.upload = multer({ storage });

exports.uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: "flipkart-clone-app",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  }),
});

exports.adminMiddleware = async (req, res, next) => {
  if (req.user.role !== "admin") {
    if (req.user.role !== "super-admin") {
      return res.status(400).json({ message: "Admin access denied" });
    }
  }
  next();
};

exports.userMiddleware = async (req, res, next) => {
  if (req.user.role !== "user")
    res.status(400).json({
      message: "User access denied!",
    });
  next();
};

exports.superAdminMiddleware = (req, res, next) => {
  if (req.user.role !== "super-admin") {
    return res.status(200).json({ message: "Super Admin access denied" });
  }
  next();
};