//Import the react module
var React = require("react");
//Import the Jumbotron Bootstrap component
var Jumbotron = require('react-bootstrap/lib/Jumbotron');

//Define a component class of Title
var JumbotronInstance = React.createClass({
  render: function() {
    //Render a div with an ID of Title, with the contents being the value inside of the pageTitle props
    return (
      <Jumbotron id="mainJumbo">
      </Jumbotron>
    )
  }
});

module.exports = JumbotronInstance;
