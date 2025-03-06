import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Progress from './pages/Progress';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar className="fixed top-0 left-0 right-0 z-50" />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        <Footer className="fixed bottom-0 left-0 right-0 z-50" />
      </div>
    </Router>
  );
}

export default App;