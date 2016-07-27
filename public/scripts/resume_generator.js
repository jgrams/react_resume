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
      <div className="hiddenResumeContainer">
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
      <div className="hiddenResumeContainer">
      <h1>Experience</h1>
        <h2>SpeakEasy - Development Intern</h2>
        <h2>Startup Institute - Web Development Bootcamp</h2>
        <h2></h2>
      </div>
    );
  }
});

var EducationResumeItem = React.createClass({
  render: function() {
    return (
      <div className="hiddenResumeContainer">
      <h1>Education</h1>
        <ul>
          <li>Lawrence University, Appleton- Philosophy, English: 2004 – 2008</li>
        </ul>
      </div>
    );
  }
});


ReactDOM.render(
  <ResumeHeader/>,
  document.getElementById('content')
);