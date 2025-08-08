import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['home', 'about', 'location', 'guestnotes', 'contact', 'gallery'];

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    closed: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md text-white px-4 py-2 flex justify-between items-center shadow-lg">
      
      {/* Brand Name with Heart */}
      <motion.h1
        className="text-[18px] md:text-[22px] lg:text-[26px] text-[#f2c49b] drop-shadow-xl font-[Rallocate] leading-tight tracking-tight antialiased flex items-center"
        style={{ fontFamily: "'Rallocate Personal Use', cursive" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        A
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#f2c49b"
          viewBox="0 0 24 24"
          className="w-4 h-4 mx-2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
       
          
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                   2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
                   4.5 2.09C13.09 3.81 14.76 3 16.5 3
                   19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                   6.86-8.55 11.54L12 21.35z" />
        </motion.svg>
        M
      </motion.h1>

      {/* Hamburger Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden text-[#f2c49b] focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Links */}
      <div className="hidden sm:flex sm:items-center sm:gap-6">
        {links.map((section, i) => (
          <motion.button
            key={section}
            onClick={() => onNavigate(section)}
            className="hover:text-[#f2c49b] transition font-semibold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: i * 0.05 + 0.3 } }}
          >
            {section === 'guestnotes' ? 'Send wishes' : section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="sm:hidden absolute top-full left-0 w-full bg-black/70 backdrop-blur-md p-4"
          >
            {links.map((section) => (
              <button
                key={section}
                onClick={() => {
                  onNavigate(section);
                  setIsOpen(false);
                }}
                className="block w-full text-left py-2 hover:text-[#f2c49b] font-semibold"
              >
                {section === 'guestnotes' ? 'Send wishes' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
