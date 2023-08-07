const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const { Schema } = mongoose;
const PSSchema = new Schema({
  id: ObjectId,
  name: String,
  add: String,
  
});
const PS = mongoose.model("policestations", PSSchema);
module.exports = PS;
//PS is used to perform CRUD 