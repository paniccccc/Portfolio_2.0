import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 md:gap-1.5 px-3 py-1.5 bg-white/50 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-800/40 backdrop-blur-md rounded-full shadow-lg text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 transition-all duration-300">
      <a 
        href="#intro" 
        className="px-3 py-1.5 rounded-full hover:bg-slate-200/40 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
      >
        Home
      </a>
      <a 
        href="#projects" 
        className="px-3 py-1.5 rounded-full hover:bg-slate-200/40 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
      >
        Projects
      </a>
      <a 
        href="#timeline" 
        className="px-3 py-1.5 rounded-full hover:bg-slate-200/40 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
      >
        Timeline
      </a>
      <a 
        href="#contact" 
        className="px-3 py-1.5 rounded-full hover:bg-slate-200/40 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
      >
        Contact
      </a>
    </nav>
  );
}

export default Navbar;
