// components/LearningEntryItem.js
import React from 'react';
import { motion } from 'framer-motion';

const LearningEntryItem = ({ entry, index }) => {
  return (
    <motion.div
      key={entry._id}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="md:w-1/5">
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">
            {new Date(entry.date).toLocaleDateString()}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {entry.topic}
          </h3>
          <div className="flex items-center mb-2">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
              {entry.hours} {entry.hours === 1 ? 'hour' : 'hours'}
            </span>
          </div>
          <div className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            Project: {entry.project}
          </div>
        </div>
        
        <div className="md:w-3/5">
          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">What I Learned:</h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {entry.description}
          </p>
        </div>
        
        <div className="md:w-1/5">
          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {entry.technologies.map((tech, idx) => (
              <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LearningEntryItem;