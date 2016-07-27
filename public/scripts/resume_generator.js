var ResumeHeader = React.createClass({
  render: function() {
    return (
      <div className="resumeContainer">
      <h1>John Gramila's Resume</h1>
        <ResumeList data={this.props.data} />
      </div>
    );
  }
});

var ResumeList = React.createClass({
  render: function() {
    var resumeNodes = this.props.data.map(function(resume_item) {
      return (
        <ResumeItem title={resume_item.title} key={resume_item.id}>
          {resume_item.text}
        </ResumeItem>
      );
    });
    return (
      <div className="commentList">
        {resumeNodes}
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

var data = [
  {id: 1, title: "Languages", text: "This is one comment"},
  {id: 2, title: "Experience", text: "This is another comment"},
  {id: 3, title: "Education", text: "This is another comment"}
];


ReactDOM.render(
  <ResumeHeader data={data}/>,
  document.getElementById('content')
);