const User = require("../../models/User.model");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  console.log(email,firstName,lastName,password,email)

  await User.findOne({ email: email }).exec((error, user) => {
    if (user) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }

    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      username: Math.random(),
    });
    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: "Something Wents Wrong",
        });
      }

      return res.status(201).json({
        message: "User created",
        user: data,
      });
    });
  });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  await User.findOne({ email: email }).exec((error, user) => {
    if (error) res.status(400).json({ message:error });
    if (user) {
      if (user.authenticate(password)) {
        const { _id,email, firstName, lastName, role, fullName } = user;
        const token = jwt.sign({ _id: user._id ,role:user.role}, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        res.status(200).json({
          token,
          user: {
            _id,
            email,
            firstName,
            lastName,
            role,
            fullName,
          },
        });
      } else {
        return res.status(400).json({
          message: "Invalid Password!",
        });
      }
    } else {
      return res.status(400).json({
        message: "Something Wents Wrong",
      });
    }
  });
};

module.exports = {
  signup: signUp,
  signin: signIn,
};
