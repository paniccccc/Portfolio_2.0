import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import InteractiveBackground from "./components/InteractiveBackground";
import Portfolio from "./components/portfolio";
import Intro from "./components/intro";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Timeline from "./components/timeline";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const sunIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5 transition-transform duration-300 hover:rotate-45"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5 transition-transform duration-300 hover:-rotate-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  return (
    <>
      <Navbar />
      <InteractiveBackground />
      
      <button
        type="button"
        onClick={handleThemeSwitch}
        aria-label="Toggle dark mode"
        className="fixed p-3 z-50 right-6 top-6 md:right-8 md:top-8 bg-white/75 dark:bg-slate-900/75 text-slate-800 dark:text-yellow-400 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
      >
        {theme === "dark" ? sunIcon : moonIcon}
      </button>
      
      <div className="min-h-screen text-slate-900 dark:text-slate-100 pt-24 pb-10 transition-colors duration-300">
        <div className="max-w-4xl w-11/12 mx-auto space-y-16">
          <Intro />
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
