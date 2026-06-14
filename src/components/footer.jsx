import React from 'react';

function Footer() {
	return (
		<div className="py-8 text-center border-t border-slate-200/30 dark:border-slate-800/30">
			<p className="text-sm text-slate-400 dark:text-slate-500">
				&copy; {new Date().getFullYear()} Ronit Mohanty. All rights reserved.
			</p>
		</div>
	);
}

export default Footer;