import React from 'react';

function CoverLetterButton({ cover_letter }, { toggle_view }) {
	console.log({toggle_view})
	return (
		<button onClick={ toggle_view }>
  				{ cover_letter.header }
	    </button>
	);
}

export default CoverLetterButton;