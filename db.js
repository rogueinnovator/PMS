const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/PMS";
const connectTomongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("shy connect shu");
};
module.exports = connectTomongo;