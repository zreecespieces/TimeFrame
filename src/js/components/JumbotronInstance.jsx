//Import the react module
var React = require('react');
//Import the Instructions component
var Instructions = require('./Instructions.jsx');
//Import the Result component
var Result = require('./Result.jsx');
//Import the Sentence component
var Sentence = require('./Sentence.jsx');
//Import the Jumbotron Bootstrap component
var Jumbotron = require('react-bootstrap/lib/Jumbotron');

//Define a component class of JumbotronInstance
var JumbotronInstance = React.createClass({
  //Defines the inital state of the component
  getInitialState: function () {
    return { selectedAMovie: true}; //Determines whether or not the user has started typing in a movie name
  },

  render: function() {
    //Defines a variable to hold the content of the jumbotron
    var content;
    //If there is a movie selected...
    if (this.state.selectedAMovie) {
      //...then make the variable content hold this div
      content = (
        <div>
          <Sentence movie1="Antz" movie2="Bee Movie" movie3="Marmaduke" keyword1="ant" keyword2="bee"/>
          <br />
          <br />
          <Result years={6} months={5} days={4} hours={3} minutes={2} seconds={1}/>
        </div>
      );
    }
    //Otherwise make the variable content variable an instance of the Instructions component
    else {
      content = <Instructions />;
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
