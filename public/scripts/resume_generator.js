var ResumeHeader = React.createClass({
  render: function() {
    return (
      <div className="resumeContainer">
      <h1>Resume</h1>
        <ResumeItem />
        <ResumeItem />
        <ResumeItem />
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
        {this.props.children}
      </div>
    );
  }
});



ReactDOM.render(
  <ResumeHeader />,
  document.getElementById('content')
);