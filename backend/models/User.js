const { mongoose, Schema } = require("mongoose");
const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  cnic: {
    type: String,
    // require: true,
    unique: true,
  },
  badgeNumber: String,
  rank: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  PS: {
    type: Schema.Types.ObjectId,
    ref: "policestation",
  },
});
const User = mongoose.model("user", UserSchema);
module.exports = User;
