var Resume = React.createClass({
  render: function() {
    return (
      <div className="contentWrapper">
        <h1>John Gramila's Resume</h1>
        <div className="resumeItemWrapper">
          <ResumeContainer title="Languages"/>
          <ResumeContainer title="Experience"/>
          <ResumeContainer title="Education"/>
        </div>
        <h1>Cover Letter Generator</h1>
        <CoverLetter/>
      </div>
    );
  }
});

var ResumeContainer = React.createClass({
  getInitialState: function(){
    return {isHidden: false};
  },
  onClick: function() {
    this.setState({ isHidden : !this.state.isHidden} );
  },
  render: function() {
    if(!this.state.isHidden){
      return (
        <div className="resumeContainer" onClick={this.onClick}>
          <h2>{this.props.title}</h2>
        </div>
      )
    }
    else {
      return (
        <ResumeItem handleOnClick={this.onClick} title={this.props.title}/>
      );
    }
  }
});

var ResumeItem = React.createClass({
  render: function() {
    if (this.props.title === "Languages") {
      var resumeContent = <LanguagesContent/>;
    } else if (this.props.title === "Experience") {
      var resumeContent = <ExperienceContent/>;
    }
    else if (this.props.title === "Education") {
      var resumeContent = <EducationContent/>;
    }
    else {
      console.log("Well, that's not good")
    }
    return (
      <div className="resumeContainer" onClick={this.props.handleOnClick}>
        <h3>{this.props.title}</h3>
          {resumeContent}
      </div>
    );
  }
});

var LanguagesContent = React.createClass({
  render: function() {
    return (
      <ul>
        <li>Proficient: Ruby, Rails, HTML, CSS</li>
        <li>Experienced: Javascript, JQuery, Git, Bootstrap, React</li>
        <li>Familiar: GIMP, SQL, Excel, Inkscape</li>
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

var CoverLetter = React.createClass({
  render: function() {
    return (
      <div className="coverLetterWrapper">
        <CoverLetterButtonWrapper/>
        <CoverLetterTextWrapper/>
      </div>
    );
  }
});

var CoverLetterButtonWrapper = React.createClass({
  render: function() {
    return (
      <div className="coverLetterButtonWrapper">
        <CoverLetterButton title="Rails"/>
        <CoverLetterButton title="React"/>
        <CoverLetterButton title="Another Langugage"/>
        <CoverLetterButton title="Rails"/>
        <CoverLetterButton title="React"/>      
      </div>
    );
  }
});

var CoverLetterButton = React.createClass({
  getInitialState: function(){
    return {isActive: false};
  },
  switchState: function() {
    this.setState({ isActive:!this.state.isActive });
  },
  render: function() {
    var className = this.state.isActive ? "button unactivated" : "button activated";
    return (
      <button className={className} onClick={this.switchState}>{this.props.title}</button>
    );
  }
});

var CoverLetterTextWrapper = React.createClass({
  render: function() {
    return (
      <div className="coverLetterTextWrapper">
        <CoverLetterText/>
      </div>
    );
  }
});

var CoverLetterText = React.createClass({
  render: function() {
    return (
      <text>{this.props.title}</text>
    );
  }
});

ReactDOM.render(
  <Resume/>,
  document.getElementById('content')
);