const mongoose = require("mongoose");

const mongoURL = process.env.MONGODB_URI;

const connectToMongo = () => {
  try {
    mongoose.connect(mongoURL);
    console.log("Mongoose is connected");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};

module.exports = connectToMongo;
