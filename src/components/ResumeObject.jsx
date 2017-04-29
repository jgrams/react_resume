import React, { Component } from 'react';
import ResumeWrapper from './ResumeWrapper.jsx';

class ResumeObject extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			resumeItems: [
				{ name: 'Proficiencies', id: 0, content: 
					['Experienced: Ruby, PHP, HTML, CSS, Rails', 
	         		 'More To Learn: SQL, Bash, Javascript, Git, React, Selenium',
	         		 'Used \'em: GIMP, PostgreSQL, MySQL, Excel, Salesforce, Jenkins, Vagrant'] }, 
				{ name: 'Experience', id: 1, content: 
					['Wellspring Worldwide: 2016 - 2017', 
	         		'Groupon: 2011 - 2016'] }, 
				{ name: 'Education', id: 2, content: 
					['Lawrence University, Appleton- Philosophy, English: 2004 – 2008', 
	         		'Startup Institute - Web Development Bootcamp: 2016'] },
	         	{ name: 'Statement', id: 3, content:
	         		['My goal in life is to be happy and do things I enjoy. I like programming because I struggle through an issue, eventually resolve it and feel like I did something challenging.'] }
			], 
		};
	}

	render () {
		return (
	        <div className="resumeItems" >
	        	{ this.state.resumeItems.map(section => {
					return <ResumeWrapper key={section.id} section={section} />
				})}
	        </div>
		);
	}
}

export default ResumeObject;