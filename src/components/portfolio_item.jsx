function PortfolioItem({title, about, stack, link, gitlink}){
    return(
        <div className="flex flex-col bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"> 
            <div className="flex flex-col flex-grow p-5">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                    {title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed flex-grow">
                    {about}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {stack.map((item, idx) => (
                        <span 
                            key={idx} 
                            className="inline-block px-2 py-0.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200/30 dark:border-slate-700/30"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-2 mt-auto pt-2">
                    <a 
                        href={gitlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 flex-1 px-3 py-2 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 hover:border-transparent transition-all duration-300"
                    >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                        <span>Code</span>
                    </a>

                    {link && (
                        <a 
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5 flex-1 px-3 py-2 text-xs font-bold bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 shadow-sm transition-all duration-300"
                        >
                            <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                            <span>Live</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem;