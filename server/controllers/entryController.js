// server/controllers/entryController.js
const Entry = require('../models/Entry');

const getEntries = async (req, res) => {
  try {
    const entries = await Entry.find().sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getEntry = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    res.json(entry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createEntry = async (req, res) => {
  const entry = new Entry({
    date: req.body.date || new Date(),
    topic: req.body.topic,
    description: req.body.description,
    hours: req.body.hours,
    project: req.body.project,
    technologies: req.body.technologies
  });

  try {
    const newEntry = await entry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateEntry = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Entry not found' });

    if (req.body.date) entry.date = req.body.date;
    if (req.body.topic) entry.topic = req.body.topic;
    if (req.body.description) entry.description = req.body.description;
    if (req.body.hours) entry.hours = req.body.hours;
    if (req.body.project) entry.project = req.body.project;
    if (req.body.technologies) entry.technologies = req.body.technologies;

    const updatedEntry = await entry.save();
    res.json(updatedEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteEntry = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    
    await Entry.deleteOne({ _id: req.params.id });
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getEntries,
  getEntry,
  createEntry,
  updateEntry,
  deleteEntry,
};