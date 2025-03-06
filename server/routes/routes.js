// server/routes/routes.js
const express = require('express');
const router = express.Router();
const {
  getEntries,
  getEntry,
  createEntry,
  updateEntry,
  deleteEntry,
} = require('../controllers/entryController');

const {
  getProjects,
  createProject,
  deleteProject,
} = require('../controllers/projectController');

const {
  getLearningEntries,
  createLearningEntry,
  deleteLearningEntry,
} = require('../controllers/learningEntryController');
const { getStats } = require('../controllers/statsController');

// LEARNING ENTRIES ROUTES
router.get('/learning-entries', getLearningEntries);
router.post('/learning-entries', createLearningEntry);
router.delete('/learning-entries/:id', deleteLearningEntry);

;
const { getGitHubRepos } = require('../controllers/githubController');

router.get('/github/repos', getGitHubRepos); // API route for GitHub repos




// ENTRIES ROUTES
router.get('/entries', getEntries);
router.get('/entries/:id', getEntry);
router.post('/entries', createEntry);
router.put('/entries/:id', updateEntry);
router.delete('/entries/:id', deleteEntry);

// PROJECTS ROUTES
router.get('/projects', getProjects);
router.post('/projects', createProject);
router.delete('/projects/:id', deleteProject);

// STATS ROUTES
router.get('/stats', getStats);

module.exports = router;