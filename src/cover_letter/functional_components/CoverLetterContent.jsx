import React from 'react';

function CoverLetterContent({ cover_letter }) {
	return (
		<div className="coverLetterContent">
			{ cover_letter.header }
	    </div>
	);
}

export default CoverLetterContent;