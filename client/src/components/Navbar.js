import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const Navbar = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Progress', path: '/progress' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`bg-white dark:bg-gray-800 shadow-md ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div 
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex 
                items-center 
                cursor-pointer 
                text-2xl 
                font-bold 
                text-gray-800 
                dark:text-white
                hover:text-blue-600 
                dark:hover:text-blue-400
                transition-colors 
                duration-300
              "
            >
              <Home className="mr-2 w-6 h-6" />
              My Portfolio
            </motion.div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="
                  text-gray-700 
                  dark:text-gray-300 
                  hover:text-blue-600 
                  dark:hover:text-blue-400 
                  px-3 
                  py-2 
                  rounded-md 
                  transition-colors 
                  duration-300
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="
                text-gray-700 
                dark:text-gray-300 
                hover:text-blue-600 
                dark:hover:text-blue-400 
                focus:outline-none
              "
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="
                    block 
                    text-gray-700 
                    dark:text-gray-300 
                    hover:text-blue-600 
                    dark:hover:text-blue-400 
                    px-3 
                    py-2 
                    rounded-md 
                    transition-colors 
                    duration-300
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;