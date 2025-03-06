// server/models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: [{
    type: String,
    trim: true,
  }],
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    required: true,
  },
  features: [{
    type: String,
    required: true,
  }],
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);