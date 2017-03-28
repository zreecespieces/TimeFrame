var React = require("react");

var Title = React.createClass({
  render: function() {
    return <div id="Title">{this.props.pageTitle}</div>
  }
});

module.exports = Title;
