const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const { Schema } = mongoose;
const PSSchema = new Schema({
  id: ObjectId,
  name: String,
  add: String,
  
});
const PS = mongoose.model("policestation", PSSchema);
module.exports = PS;
