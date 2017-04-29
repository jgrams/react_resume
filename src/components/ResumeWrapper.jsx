import React, { Component } from 'react';
import ResumeContent from '../functional_components/ResumeContent.jsx';
import ResumeHeader from '../functional_components/ResumeHeader.jsx';

class ResumeWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = { active: false };
		this.toggleView = this.toggleView.bind(this);
	}
	
	toggleView = () => {
		this.setState({
			active: !this.state.active
		});
	}

	determineView () {
		let shared_properties = { key: this.props.section.id, 
								  section: this.props.section };
		if (this.state.active)
			return <ResumeContent { ...shared_properties } />	
		else
			return <ResumeHeader { ...shared_properties } />
	}

	render () {
		return (
	        <div className="resumeWrapper" onClick={this.toggleView}>
				{ this.determineView() }	        	
	        </div>
		);
	}
}

export default ResumeWrapper;