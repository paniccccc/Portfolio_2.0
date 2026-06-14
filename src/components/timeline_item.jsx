import React from 'react';

function TimelineItem({year, title, duration, details}){
    const hasDuration = duration && duration.trim().length > 0;
    
    return(
        <div className="relative pl-6 md:pl-8 group">
            {/* Timeline dot selector */}
            <div className="absolute w-3.5 h-3.5 bg-indigo-500 rounded-full mt-5 -left-[7px] ring-4 ring-slate-50 dark:ring-slate-950 transition-all duration-300 shadow-sm group-hover:scale-125 group-hover:bg-purple-500" />
            
            <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200/40 dark:border-slate-800/40 p-4 rounded-2xl shadow-sm hover:shadow-md hover:bg-white/55 dark:hover:bg-slate-900/55 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-2.5 text-xs md:text-sm mb-2">
                    <span className="inline-block px-2 py-0.5 font-bold text-white bg-slate-900 dark:bg-slate-800 rounded-lg shadow-sm">
                        {year}
                    </span>
                    
                    <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
                        {title}
                    </h3>

                    {hasDuration && (
                        <span className="inline-block px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-md">
                            {duration}
                        </span>
                    )}
                </div>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {details}
                </p>
            </div>
        </div>
    )
}

export default TimelineItem;