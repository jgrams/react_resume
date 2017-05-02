import React, { Component } from 'react';
import CoverLetterButton from '../functional_components/CoverLetterButton.jsx';
import CoverLetterContent from '../functional_components/CoverLetterContent.jsx';

class CoverLetterObject extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			coverLetterItems: [
				{ header: 'Proficiencies', id: 0, sort_order: 0, content:
					['Works Hard.'], active: false }, 
				{ header: 'Experience', id: 1, sort_order: 1, content: 
					['Works Hard.'], active: false }, 
				{ header: 'Education', id: 2, sort_order: 2, content: 
					['Works Hard.'], active: false },
	         	{ header: 'Statement', id: 3, sort_order: 3, content:
	         		['Works Hard.'], active: false }
			], 
		};
		this.toggleView = this.toggleView.bind(this);
	}

	toggleView = () => {
		this.setState({
			active: !this.state.active
		});
	}

	render () {
		return (
	        <div className="coverLetter" >
		        <div className="coverLetterButtons" >
		        	{ this.state.coverLetterItems.map(cover_letter => {
						return <CoverLetterButton key={ cover_letter.id } cover_letter={ cover_letter } onClick={ this.toggleView } />
					})}
		        </div>
		        <div className="coverLetterContents" >
	        		{ this.state.coverLetterItems.map(cover_letter => {
						return <CoverLetterContent key={ cover_letter.id } cover_letter={ cover_letter } />
					})}
		        </div>
	        </div>
		);
	}
}

export default CoverLetterObject;