//Import the react module
var React = require('react');
//Import the Instructions component
var Instructions = require('./Instructions.jsx');
//Import the Result component
var Result = require('./Result.jsx');
//Import the Sentence component
var Sentence = require('./Sentence.jsx');
//Import the Input component
var Input = require('./Input.jsx');
//Import the Jumbotron Bootstrap component
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
//Import the FormGroup Bootstrap component
var FormGroup = require('react-bootstrap/lib/FormGroup');

//Define a component class of JumbotronInstance
var JumbotronInstance = React.createClass({
  //Defines the inital state of the component
  getInitialState: function () {
    return { selectedAMovie: true,
             numberOfMovies: 2,
             movie1: "Antz",
             movie2: "Bee Movie",
             movie3: "Marmaduke",
             keyword1: "ant",
             keyword2: "bee"}; //Determines whether or not the user has started typing in a movie name
  },

  render: function() {
    //Determine how many Movie/Keyword layers to render
    var rows = [], i = 0, len = this.state.numberOfMovies;
    while (++i <= len) rows.push(i);
    //Define a variable to hold the content of the jumbotron
    var content;
    //If there is a movie selected...
    if (this.state.selectedAMovie) {
      //...then make the variable content hold this div
      content = (
        <div>
          <Sentence movie1={this.state.movie1} movie2={this.state.movie2} movie3={this.state.movie3} keyword1={this.state.keyword1} keyword2={this.state.keyword2}/>
          <br />
          <br />
          <Result years={6} months={5} days={4} hours={3} minutes={2} seconds={1}/>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <FormGroup>
            {rows.map(function (i) {
              return <Input key={i} />;
            })}
          </FormGroup>
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
