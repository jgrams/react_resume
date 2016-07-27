var Resume = React.createClass({
  render: function() {
    return (
      <div className="resumeContainer">
        <h1>John Gramila's Resume</h1>
        <ResumeWapper/>
      </div>
    );
  }
});

var ResumeWapper = React.createClass({
  toggle: function(){
    this.setState({isHidden: !this.state.isHidden});
  },
  render: function() {
    return (
      <div className="resumeWrapper">
        {!this.props.isHidden? <ResumeHeader title="Languages" onClick={this.toggle}/> : <LanguageResumeItem onClick={this.toggle}/>}
        {!this.props.isHidden? <ResumeHeader title="Experience" onClick={this.toggle}/> : <ExperienceResumeItem onClick={this.toggle}/>}
        {!this.props.isHidden? <ResumeHeader title="Education" onClick={this.toggle}/> : <EducationResumeItem onClick={this.toggle}/>}
      </div>
    );
  }
});

var ResumeHeader = React.createClass({
  getInitialState: function(){
    return {isHidden: false};
  },
  render: function() {
    return (
      <div className="resumeHeader">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
});



var LanguageResumeItem = React.createClass({
  render: function() {
    return (
      <div className="resumeContent">
        <h1>Languages</h1>
          <ul>
            <li>Proficient: Ruby, Rails, HTML, CSS, Command Line</li>
            <li>Experienced: Javascript, JQuery, Git, Bootstrap, React</li>
            <li>Familiar: GIMP,  SQL, Excel</li>
          </ul>
      </div>
    );
  }
});

var ExperienceResumeItem = React.createClass({
  render: function() {
    return (
      <div className="resumeContent">
        <h2>Experience</h2>
          <ul>
            <h3>SpeakEasy - Development Intern</h3>
            <h3>Startup Institute - Web Development Bootcamp</h3>
            <h3>Groupon - Web Content Specialist</h3>
            <h3>Groupon - Deal Qualifier</h3>
            <h3>Windy City Weasels - Chief of Public Information</h3>
          </ul>
      </div>
    );
  }
});

var EducationResumeItem = React.createClass({
  render: function() {
    return (
      <div className="resumeContent">
        <h2>Education</h2>
        <ul>
          <li>Lawrence University, Appleton- Philosophy, English: 2004 – 2008</li>
          <li>Startup Institute - Web Development Bootcamp: 2016</li>
        </ul>
      </div>
    );
  }
});


ReactDOM.render(
  <Resume/>,
  document.getElementById('content')
);