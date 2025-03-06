// pages/Progress.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StatsOverview from '../components/StatsOverview';
import LearningEntryForm from '../components/LearningEntryForm';
import LearningEntryItem from '../components/LearningEntryItem';

const Progress = () => {
  const [learningEntries, setLearningEntries] = useState([]);
  const [projects, setProjects] = useState([]);
  const [techOptions, setTechOptions] = useState([]);
  const [newEntry, setNewEntry] = useState({
    topic: '',
    description: '',
    hours: 1,
    project: '',
    technologies: [],
  });
  const [newProject, setNewProject] = useState('');
  const [newTech, setNewTech] = useState('');
  const [stats, setStats] = useState({
    totalHours: 0,
    topTechnologies: [],
    projectBreakdown: [],
  });

  // Fetch learning entries from the backend
  useEffect(() => {
    const fetchLearningEntries = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/learning-entries');
        const data = await response.json();
        setLearningEntries(data);
      } catch (err) {
        console.error('Error fetching learning entries:', err);
      }
    };

    fetchLearningEntries();
  }, []);

  // Calculate stats whenever entries change
  useEffect(() => {
    calculateStats();
  }, [learningEntries]);

  const calculateStats = () => {
    // Calculate total hours
    const totalHours = learningEntries.reduce((total, entry) => total + entry.hours, 0);
    
    // Calculate top technologies
    const techCount = {};
    learningEntries.forEach((entry) => {
      entry.technologies.forEach((tech) => {
        techCount[tech] = (techCount[tech] || 0) + entry.hours;
      });
    });
    
    const topTechnologies = Object.entries(techCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, hours]) => ({ name, hours }));
    
    // Calculate project breakdown
    const projectHours = {};
    learningEntries.forEach((entry) => {
      projectHours[entry.project] = (projectHours[entry.project] || 0) + entry.hours;
    });
    
    const projectBreakdown = Object.entries(projectHours)
      .map(([name, hours]) => ({ name, hours }))
      .sort((a, b) => b.hours - a.hours);
    
    setStats({ totalHours, topTechnologies, projectBreakdown });
  };

  const addLearningEntry = async () => {
    if (!newEntry.topic || !newEntry.description || !newEntry.project) return;

    try {
      const response = await fetch('http://localhost:5000/api/learning-entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry),
      });

      const data = await response.json();
      setLearningEntries([...learningEntries, data]);
      setNewEntry({ 
        topic: '', 
        description: '', 
        hours: 1, 
        project: '',
        technologies: [], 
      });
    } catch (err) {
      console.error('Error adding learning entry:', err);
    }
  };

  const addProject = () => {
    if (!newProject || projects.includes(newProject)) return;
    setProjects([...projects, newProject]);
    setNewProject('');
  };

  const addTech = () => {
    if (!newTech || techOptions.includes(newTech)) return;
    setTechOptions([...techOptions, newTech]);
    setNewTech('');
  };

  const handleTechSelect = (tech) => {
    const techs = newEntry.technologies.includes(tech)
      ? newEntry.technologies.filter((t) => t !== tech)
      : [...newEntry.technologies, tech];
    
    setNewEntry({ ...newEntry, technologies: techs });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white"
        >
          Learning Progress Tracker
        </motion.h1>

        {/* Stats Overview */}
        <StatsOverview stats={stats} learningEntries={learningEntries} />

        {/* Add New Entry Form */}
        <LearningEntryForm
          newEntry={newEntry}
          setNewEntry={setNewEntry}
          projects={projects}
          techOptions={techOptions}
          newProject={newProject}
          setNewProject={setNewProject}
          newTech={newTech}
          setNewTech={setNewTech}
          addLearningEntry={addLearningEntry}
          addProject={addProject}
          addTech={addTech}
          handleTechSelect={handleTechSelect}
        />

        {/* Learning Entries List */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          Recent Learning Activities
        </h2>
        <div className="space-y-6">
          {learningEntries.map((entry, index) => (
            <LearningEntryItem key={entry._id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Progress;