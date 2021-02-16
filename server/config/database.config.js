const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

exports.databaseSetup = async () => {
  try {
    await mongoose
      .connect(
        `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.wbzwx.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
        }
      )
      .then((res) => {
        console.log("database connected successfully!".bold.green);
      });
  } catch (error) {
    console.log("error while connect to database!".bold.red, error.message);
    process.exit(1);
  }
};
