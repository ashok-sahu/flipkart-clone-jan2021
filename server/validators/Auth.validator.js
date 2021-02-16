const { check, validationResult } = require("express-validator");

exports.checkUserSignUp = [
  check("firstName", "firstName is Required")
    .notEmpty()
    .isString()
    .isLength({
      min: 5,
      max: 255,
    })
    .withMessage("firstName must be between 5 to 255 characters"),
  check("lastName", "lastName is Required")
    .notEmpty()
    .isString()
    .isLength({
      min: 3,
      max: 255,
    })
    .withMessage("lastName must be between 5 to 255 characters"),
  check("email").isEmail().withMessage("Valid Email is required"),
  check("password", "password is required")
    .notEmpty()
    .isLength({
      min: 5,
    })
    .withMessage("Password must contain at least 5 characters"),
];

exports.checkUserSignIn = [
  check("email").isEmail().withMessage("Valid Email is required"),
  check("password", "password is required")
    .notEmpty()
    .isLength({
      min: 5,
    })
    .withMessage("Password must contain at least 5 characters"),
];

exports.checkAdminSignUp = [
  check("firstName", "firstName is Required")
    .notEmpty()
    .isString()
    .isLength({
      min: 5,
      max: 255,
    })
    .withMessage("firstName must be between 5 to 255 characters"),
  check("lastName", "lastName is Required")
    .notEmpty()
    .isString()
    .isLength({
      min: 3,
      max: 255,
    })
    .withMessage("lastName must be between 5 to 255 characters"),
  check("email").isEmail().withMessage("Valid Email is required"),
  check("password", "password is required")
    .notEmpty()
    .isLength({
      min: 5,
    })
    .withMessage("Password must contain at least 5 characters"),
];

exports.checkAdminSignIn = [
  check("email").isEmail().withMessage("Valid Email is required"),
  check("password", "password is required")
    .notEmpty()
    .isLength({
      min: 5,
    })
    .withMessage("Password must contain at least 5 characters"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
