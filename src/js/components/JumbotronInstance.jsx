//Import the react module
var React = require('react');
//Import the Jumbotron Bootstrap component
var Jumbotron = require('react-bootstrap/lib/Jumbotron');

//Define a component class of JumbotronInstance
var JumbotronInstance = React.createClass({
  //Defines the inital state of the component to reflect having no movies selected
  getInitialState: function () {
    return { selectedAMovie: false };
  },

  render: function() {
    //Defines a variable to hold the content of the jumbotron
    var content;
    //If there is a movie selected...
    if (this.state.selectedAMovie) {
      //...then make the variable content hold this div
      content = (
        <div>
          <p>You selected a movie!</p>
        </div>
      );
    }
    //Otherwise make the variable content hold this div
    else {
      content = (
        <div>
          <p>Begin by searching for your first movie, then select what word in the movie you want to be replaced by the next movie, and then search for your second movie. You can add as many layers as you'd like!</p>
        </div>
      );
    }
    //Render a div with an ID of mainJumbo, with the contents being a Bootstrap Jumbotron holding the variable content
    return (
      <Jumbotron id="mainJumbo">
        {content}
      </Jumbotron>
    )
  }
});

//Export the JumbotronInstance component class
module.exports = JumbotronInstance;
