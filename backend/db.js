const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/inotebook";

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
