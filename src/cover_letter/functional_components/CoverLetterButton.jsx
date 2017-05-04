import React from 'react';

function CoverLetterButton({ cover_letter }) {
	return (
		<button>
  				{ cover_letter.header }
	    </button>
	);
}

export default CoverLetterButton;