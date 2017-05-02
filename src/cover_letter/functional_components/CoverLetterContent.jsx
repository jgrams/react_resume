import React from 'react';

function CoverLetterContent({ cover_letter }) {
	return (
		<div className="coverLetterContent">
			{ cover_letter.name }
	    </div>
	);
}

export default CoverLetterContent;