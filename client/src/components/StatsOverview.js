// components/StatsOverview.js
import React from 'react';
import { motion } from 'framer-motion';

const StatsOverview = ({ stats, learningEntries }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Total Learning</h3>
        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.totalHours} hours</p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">{learningEntries.length} entries</p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Top Technologies</h3>
        <div className="space-y-2">
          {stats.topTechnologies.map((tech, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
              <span className="font-medium text-blue-600 dark:text-blue-400">{tech.hours}h</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Projects</h3>
        <div className="space-y-2">
          {stats.projectBreakdown.map((project, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{project.name}</span>
              <span className="font-medium text-blue-600 dark:text-blue-400">{project.hours}h</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StatsOverview;