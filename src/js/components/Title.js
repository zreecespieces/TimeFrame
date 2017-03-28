//Import the react module
var React = require("react");

//Define a component class of Title
var Title = React.createClass({
  render: function() {
    //Render a div with an ID of Title, with the contents being the value inside of the pageTitle props
    return <div id="Title">{this.props.pageTitle}</div>
  }
});

//Export the Title component class
module.exports = Title;
