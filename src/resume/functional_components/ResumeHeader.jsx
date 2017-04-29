import React from 'react';

function ResumeHeader({ section }) {
	return (
		<div className="resumeContainer resumeHeader">
			{ section.name }
	    </div>
	);
}

export default ResumeHeader;