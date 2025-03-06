import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ className = '' }) => {
  return (
    <footer className={`bg-white dark:bg-gray-800 border-t dark:border-gray-700 ${className}`}>
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a 
              href="#" 
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;