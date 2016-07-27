var ResumeHeader = React.createClass({
  render: function() {
    return (
      <div className="resumeContainer">
      <h1>John Gramila's Resume</h1>
        <ResumeItem title="Experience">Proficient: Ruby, Rails, HTML, CSS, Command Line</ResumeItem>
        <ResumeItem title="Experience">Experienced: Javascript, JQuery, Git, Bootstrap, React</ResumeItem>
        <ResumeItem title="Experience">Familiar: GIMP,  SQL, Excel</ResumeItem>
      </div>
    );
  }
});

var ResumeItem = React.createClass({
  render: function() {
    return (
      <div className="resumeItem">
        <h2 className="resumeTitle">
          {this.props.title}
        </h2>
        <div className="resumeContent">
          {this.props.children}
        </div>
      </div>
    );
  }
});




ReactDOM.render(
  <ResumeHeader />,
  document.getElementById('content')
);