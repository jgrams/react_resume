var ResumeHeader = React.createClass({
  render: function() {
    return (
      <div className="resumeContainer">
        <h1>John Gramila's Resume</h1>
          <ResumerWapper/>
      </div>
    );
  }
});

var ResumeWapper = React.createClass({
  render: function() {
    return (
      <div className="resumeWrapper">
        {!this.props.isHidden? <ResumeHeader title="Languages"/> : <LanguageResumeItem/>}
        {!this.props.isHidden? <ResumeHeader title="Experience"/> : <ExperienceResumeItem/>}
        {!this.props.isHidden? <ResumeHeader title="Education"/> : <EducationResumeItem/>}
      </div>
    );
  }
});

var ResumeHeader = React.createClass({
  render: function() {
    return (
      <div className="resumeHeader">
        {this.props.title }
        {!this.props.isHidden? <ResumeHeader/> : <LanguageResumeItem/>}
        {!this.props.isHidden? <ResumeHeader/> : <LanguageResumeItem/>}
      </div>
    );
  }
});



var LanguageResumeItem = React.createClass({
  render: function() {
    return (
      <div className="resumeWrapper">
        <div className="visibleResumeContainer">
          <h1>Languages</h1>
        </div>
        <div className="hiddenResumeContainer">
          <h1>Languages</h1>
            <ul>
              <li>Proficient: Ruby, Rails, HTML, CSS, Command Line</li>
              <li>Experienced: Javascript, JQuery, Git, Bootstrap, React</li>
              <li>Familiar: GIMP,  SQL, Excel</li>
            </ul>
        </div>
      </div>
    );
  }
});

var ExperienceResumeItem = React.createClass({
  render: function() {
    return (
      <div className="resumeWrapper">
        <div className="visibleResumeContainer">
          <h1>Experience</h1>
        </div>
        <div className="hiddenResumeContainer">
          <h2>Experience</h2>
            <ul>
              <h3>SpeakEasy - Development Intern</h3>
              <h3>Startup Institute - Web Development Bootcamp</h3>
              <h3>Groupon - Web Content Specialist</h3>
              <h3>Groupon - Deal Qualifier</h3>
              <h3>Windy City Weasels - Chief of Public Information</h3>
            </ul>
        </div>
      </div>
    );
  }
});

var EducationResumeItem = React.createClass({
  render: function() {
    return (
      <div className="resumeWrapper">
        <div className="visibleResumeContainer">
          <h1>Education</h1>
        </div>
        <div className="hiddenResumeContainer">
          <h2>Education</h2>
          <ul>
            <li>Lawrence University, Appleton- Philosophy, English: 2004 – 2008</li>
            <li>Startup Institute - Web Development Bootcamp: 2016</li>
          </ul>
        </div>
      </div>
    );
  }
});


ReactDOM.render(
  <ResumeHeader/>,
  document.getElementById('content')
);