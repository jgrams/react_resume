var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="sectionHeader">
        Hello, world! I am a sectionHeader.
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);