const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      index: true,
      unique: true,
      toLowerCase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      toLowerCase: true,
    },
    hash_password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user","super-admin"],
      default: "user",
    },
    contactNumber: { type: String },
    profilePicture: { type: String },
  },
  { timestamps: true }
);

// userSchema.virtual("password").set(function (password) {
//   this.hash_password = bcrypt.hashSync(password, 10);
// });

userSchema.virtual("fullName").set(function () {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hash_password);
  },
};

const User = mongoose.model("User", userSchema);
module.exports = User;
