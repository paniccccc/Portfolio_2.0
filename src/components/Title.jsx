import React from 'react';

function Title({children, id}) {
	return (
		<div className="flex flex-col items-center mb-8">
			<h2  
				id={id}
				className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100"
			>
				{children}
			</h2>
			<div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2.5" />
		</div>
	);
}

export default Title;