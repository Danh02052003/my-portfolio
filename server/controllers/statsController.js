// server/controllers/statsController.js
const Entry = require('../models/Entry');

const getStats = async (req, res) => {
  try {
    const entries = await Entry.find();
    
    const totalHours = entries.reduce((total, entry) => total + entry.hours, 0);
    
    const techCount = {};
    entries.forEach(entry => {
      entry.technologies.forEach(tech => {
        techCount[tech] = (techCount[tech] || 0) + entry.hours;
      });
    });
    
    const topTechnologies = Object.entries(techCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, hours]) => ({ name, hours }));
    
    const projectHours = {};
    entries.forEach(entry => {
      projectHours[entry.project] = (projectHours[entry.project] || 0) + entry.hours;
    });
    
    const projectBreakdown = Object.entries(projectHours)
      .map(([name, hours]) => ({ name, hours }))
      .sort((a, b) => b.hours - a.hours);
    
    res.json({
      totalHours,
      entriesCount: entries.length,
      topTechnologies,
      projectBreakdown
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getStats,
};