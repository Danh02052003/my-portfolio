// components/LearningEntryForm.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LearningEntryForm = ({
  newEntry,
  setNewEntry,
  projects,
  techOptions,
  newProject,
  setNewProject,
  newTech,
  setNewTech,
  addLearningEntry,
  addProject,
  addTech,
  handleTechSelect,
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        Log New Learning Entry
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        <input 
          type="text"
          placeholder="Learning Topic"
          value={newEntry.topic}
          onChange={(e) => setNewEntry({ ...newEntry, topic: e.target.value })}
          className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
        />
        <select 
          value={newEntry.project}
          onChange={(e) => setNewEntry({ ...newEntry, project: e.target.value })}
          className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
        >
          <option value="">Select Project</option>
          {projects.map((project) => (
            <option key={project} value={project}>{project}</option>
          ))}
        </select>
        <div className="flex space-x-2">
          <select 
            value={newEntry.hours}
            onChange={(e) => setNewEntry({ ...newEntry, hours: parseInt(e.target.value) })}
            className="w-1/2 px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((hour) => (
              <option key={hour} value={hour}>
                {hour} {hour === 1 ? 'hour' : 'hours'}
              </option>
            ))}
          </select>
          <input 
            type="date"
            defaultValue={new Date().toISOString().split('T')[0]}
            className="w-1/2 px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>
      
      <textarea 
        placeholder="Description of what you learned"
        value={newEntry.description}
        onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
        className="w-full px-4 py-2 mt-4 border rounded-md h-24 dark:bg-gray-700 dark:text-white"
      />
      
      <div className="mt-4">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Technologies Used:
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {techOptions.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => handleTechSelect(tech)}
              className={`px-3 py-1 rounded-full text-sm ${
                newEntry.technologies.includes(tech)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Add new technology"
            value={newTech}
            onChange={(e) => setNewTech(e.target.value)}
            className="flex-grow px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={addTech}
            className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Add
          </button>
        </div>
      </div>
      
      <div className="mt-4 flex space-x-2">
        <input
          type="text"
          placeholder="Add new project"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
          className="flex-grow px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={addProject}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Add
        </button>
      </div>
      
      <button 
        onClick={addLearningEntry}
        className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Add Learning Entry
      </button>
    </motion.div>
  );
};

export default LearningEntryForm;