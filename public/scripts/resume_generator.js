var ResumeHeader = React.createClass({
  render: function() {
    return (
      <div className="resumeContainer">
        <h1>John Gramila's Resume</h1>
          <LanguageResumeItem/>
          <ExperienceResumeItem/>
          <EducationResumeItem/>
      </div>
    );
  }
});


var LanguageResumeItem = React.createClass({
  render: function() {
    return (
    <div className="resumeWrapper">
      <div className="visibleResumeContainer"></div>
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
      <div className="visibleResumeContainer"></div>
      <div className="hiddenResumeContainer">
      <h1>Experience</h1>
        <h2>SpeakEasy - Development Intern</h2>
        <h2>Startup Institute - Web Development Bootcamp</h2>
        <h2>Groupon - Web Content Specialist</h2>
        <h2>Groupon - Deal Qualifier</h2>
        <h2>Windy City Weasels - Chief of Public Information</h2>
      </div>
    </div>
    );
  }
});

var EducationResumeItem = React.createClass({
  render: function() {
    return (
    <div className="resumeWrapper">
      <div className="visibleResumeContainer"></div>
      <div className="hiddenResumeContainer">
      <h1>Education</h1>
        <ul>
          <li>Lawrence University, Appleton- Philosophy, English: 2004 – 2008</li>
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