import Title from "./Title";

function Intro() {
  const githubIcon = (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );

  const linkedinIcon = (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );

  const emailIcon = (
    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );

  const resumeIcon = (
    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );

  return (
    <>
      <div id="intro" className="flex items-center justify-center flex-col text-center pt-12 md:pt-16 scroll-mt-28">
        <h1 className="text-5xl md:text-6xl mb-3 font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Hello!
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-bold text-slate-800 dark:text-slate-100">
          I am Ronit Mohanty
        </p>
        <p className="text-sm md:text-base max-w-xl mb-8 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
          Currently an Analyst at Deloitte US-India offices. I like to game, code, and read about new and
          upcoming stuff especially related to the fields of frontend development, machine learning, cloud engineering, and UI/UX design.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 pb-12">
        <a
          target="_blank"
          href="https://github.com/paniccccc"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-800/40 backdrop-blur-sm rounded-xl shadow-sm text-sm font-semibold hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          {githubIcon}
          <span>Github</span>
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/ronit-mohanty-4895891b1/"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-800/40 backdrop-blur-sm rounded-xl shadow-sm text-sm font-semibold hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          {linkedinIcon}
          <span>LinkedIn</span>
        </a>

        <a
          target="_blank"
          href="mailto:mohantyronitt@gmail.com"
          className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-800/40 backdrop-blur-sm rounded-xl shadow-sm text-sm font-semibold hover:bg-rose-500 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          {emailIcon}
          <span>Email</span>
        </a>

        <a
          target="_blank"
          href="/Ronit_Mohanty_Resume_09-08-2022-20-08-23.pdf"
          className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-800/40 backdrop-blur-sm rounded-xl shadow-sm text-sm font-semibold hover:bg-amber-500 hover:text-white dark:hover:bg-amber-600 dark:hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          {resumeIcon}
          <span>Resume</span>
        </a>
      </div>

      <Title>Tech Stack</Title>
      <div className="flex flex-wrap justify-center gap-3 pb-12 max-w-lg mx-auto">
        <span className="px-4 py-1.5 text-xs font-bold border border-emerald-500/20 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 dark:bg-emerald-500/10 backdrop-blur-sm hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 hover:border-transparent rounded-full transition-all duration-300 cursor-default shadow-sm">
          Python
        </span>

        <span className="px-4 py-1.5 text-xs font-bold border border-yellow-500/20 dark:border-yellow-400/20 text-yellow-600 dark:text-yellow-400 bg-yellow-500/5 dark:bg-yellow-500/10 backdrop-blur-sm hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-600 hover:border-transparent rounded-full transition-all duration-300 cursor-default shadow-sm">
          Javascript
        </span>

        <span className="px-4 py-1.5 text-xs font-bold border border-sky-500/20 dark:border-sky-400/20 text-sky-600 dark:text-sky-400 bg-sky-500/5 dark:bg-sky-500/10 backdrop-blur-sm hover:bg-sky-500 hover:text-white dark:hover:bg-sky-600 hover:border-transparent rounded-full transition-all duration-300 cursor-default shadow-sm">
          React
        </span>

        <span className="px-4 py-1.5 text-xs font-bold border border-lime-500/20 dark:border-lime-400/20 text-lime-600 dark:text-lime-400 bg-lime-500/5 dark:bg-lime-500/10 backdrop-blur-sm hover:bg-lime-500 hover:text-white dark:hover:bg-lime-600 hover:border-transparent rounded-full transition-all duration-300 cursor-default shadow-sm">
          Google Cloud
        </span>

        <span className="px-4 py-1.5 text-xs font-bold border border-fuchsia-500/20 dark:border-fuchsia-400/20 text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-500/5 dark:bg-fuchsia-500/10 backdrop-blur-sm hover:bg-fuchsia-500 hover:text-white dark:hover:bg-fuchsia-600 hover:border-transparent rounded-full transition-all duration-300 cursor-default shadow-sm">
          C++
        </span>
      </div>
    </>
  );
}

export default Intro;