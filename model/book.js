const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const bookSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: {
    type: String,
    max: 20,
  },
  year: {
    type: Date,
    required: true,
    max: [currentYear, "Error future date not allowed!"],
  },
  description: String,
  ibsn: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model( "books", bookSchema );
