// server/models/Entry.js
const mongoose = require('mongoose'); // <-- Import mongoose

const EntrySchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  topic: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  hours: {
    type: Number,
    required: true,
    min: 0
  },
  project: {
    type: String,
    required: true,
    trim: true
  },
  technologies: [{
    type: String,
    trim: true
  }]
}, { timestamps: true });

module.exports = mongoose.model('Entry', EntrySchema);