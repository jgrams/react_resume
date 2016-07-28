var Resume = React.createClass({
  render: function() {
    return (
      <div className="resumeContainer">
        <h1>John Gramila's Resume</h1>
        <div className="resumeWrapper">
          <ResumeHeader title="Languages"/>
          <ResumeHeader title="Experience"/>
          <ResumeHeader title="Education"/>
        </div>
      </div>
    );
  }
});

var ResumeHeader = React.createClass({
  getInitialState: function(){
    return {isHidden: false};
  },
  onClick: function() {
    this.setState({ isHidden : !this.state.isHidden} );
  },
  render: function() {
    if(!this.state.isHidden){
      return (
        <div className="resumeHeader" onClick={this.onClick}>
          <h2>{this.props.title}</h2>
        </div>
      )
    }
    else {
      return (
        <ResumeItem onClick={this.onClick}/>
      );
    }
  }
});

var ResumeItem = React.createClass({
  render: function() {
    return (
      <div className="resumeContent" onClick={this.onClick}>
        <h1>{this.props.title}</h1>
        <LanguagesContent/>
      </div>
    );
  }
});

var LanguagesContent = React.createClass({
  render: function() {
    return (
      <ul>
        <li>Proficient: Ruby, Rails, HTML, CSS, Command Line</li>
        <li>Experienced: Javascript, JQuery, Git, Bootstrap, React</li>
        <li>Familiar: GIMP,  SQL, Excel</li>
      </ul>
    );
  }
});


var ExperienceContent = React.createClass({
  render: function() {
    return (
      <ul>
        <li>Proficient: Ruby, Rails, HTML, CSS, Command Line</li>
        <li>Experienced: Javascript, JQuery, Git, Bootstrap, React</li>
        <li>Familiar: GIMP,  SQL, Excel</li>
      </ul>
    );
  }
});


var EducationContent = React.createClass({
  render: function() {
    return (
      <ul>
        <li>Lawrence University, Appleton- Philosophy, English: 2004 – 2008</li>
        <li>Startup Institute - Web Development Bootcamp: 2016</li>
      </ul>
    );
  }
});


ReactDOM.render(
  <Resume/>,
  document.getElementById('content')
);