// server/controllers/learningEntryController.js
const LearningEntry = require('../models/learningEntry');

// Get all learning entries
const getLearningEntries = async (req, res) => {
  try {
    const entries = await LearningEntry.find().sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new learning entry
const createLearningEntry = async (req, res) => {
  const { topic, description, hours, project, technologies } = req.body;

  try {
    const newEntry = new LearningEntry({
      topic,
      description,
      hours,
      project,
      technologies,
    });

    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a learning entry
const deleteLearningEntry = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEntry = await LearningEntry.findByIdAndDelete(id);

    if (!deletedEntry) {
      return res.status(404).json({ message: 'Learning entry not found' });
    }

    res.json({ message: 'Learning entry deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getLearningEntries,
  createLearningEntry,
  deleteLearningEntry,
};