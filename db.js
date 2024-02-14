const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017";

const mongooseToConnect = () => {
  mongoose.connect(mongoURI);
};

module.exports = mongooseToConnect;
