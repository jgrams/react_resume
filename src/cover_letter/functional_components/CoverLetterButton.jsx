import React from 'react';

function CoverLetterButton({ cover_letter }) {
	return (
		<svg height="100" width="100" className="coverLetterButton">
  			<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="green" />
  			<text x="10" y="50">
  				{ cover_letter.header }
  			</text>
	    </svg>
	);
}

export default CoverLetterButton;