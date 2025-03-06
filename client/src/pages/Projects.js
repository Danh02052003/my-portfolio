import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectsGrid from '../components/ProjectsGrid';
import FutureVisionSection from '../components/FutureVisionSection';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [githubRepos, setGitHubRepos] = useState([]);

  // Fetch GitHub repositories from backend
  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/github/repos'); // Use backend API
        const data = await response.json();
        setGitHubRepos(data);
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
      }
    };

    fetchGitHubRepos();
  }, []);

  const allProjects = [...projects, ...githubRepos];

  return (
    <div className="bg-gray-350 min-h-screen py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-gray-800"
        >
          Technological Frontiers
        </motion.h1>
        
        {/* Projects Grid */}
        <ProjectsGrid projects={allProjects} />

        {/* Future Vision Section */}
        <FutureVisionSection />
      </div>
    </div>
  );
};

export default Projects;
