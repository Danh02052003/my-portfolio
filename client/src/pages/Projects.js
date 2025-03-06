// pages/Projects.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectsGrid from '../components/ProjectsGrid';
import FutureVisionSection from '../components/FutureVisionSection';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [githubRepos, setGitHubRepos] = useState([]);

  // Fetch projects from MongoDB
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
    };

    fetchProjects();
  }, []);

  // Fetch GitHub repositories
  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/github/repos');
        const data = await response.json();
        setGitHubRepos(data);
      } catch (err) {
        console.error('Error fetching GitHub repos:', err);
      }
    };

    fetchGitHubRepos();
  }, []);

  // Combine both datasets
  const allProjects = [...projects, ...githubRepos];

  return (
    <div className="bg-gray-350 min-h-screen py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-5xl 
            md:text-6xl 
            font-extrabold 
            text-center 
            mb-20 
            text-gray-800
          "
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