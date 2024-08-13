const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  staffUserId: {
    type: String,
    required: true,
    unique: true,
  },
  staffUsername: {
    type: String,
    required: true,
    unique: true,
  },
  staffName: {
    type: String,
    required: true,
  },
  staffEmail: {
    type: String,
    required: true,
  },
  staffPhone: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Staff", staffSchema);
