import React from 'react';

function ResumeContent({ section }) {
	return (
		<div className="resumeContainer resumeContent">
			<ul className={ section.name } >
				{ section.content.map(description =>
					<li>{ description }</li>
				)}
			</ul>
	    </div>
	);
}

export default ResumeContent;