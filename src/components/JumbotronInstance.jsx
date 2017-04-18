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
//Import the InputButtons component
var InputButtons = require('./InputButtons.jsx');
//Import the Jumbotron Bootstrap component
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
//Import the FormGroup Bootstrap component
var FormGroup = require('react-bootstrap/lib/FormGroup');

//Define a component class of JumbotronInstance
var JumbotronInstance = React.createClass({
  //Defines the inital state of the component
  getInitialState: function () {
    return { numberOfMovies: 2,
             movie1: "Antz",
             movie2: "Bee Movie",
             movie3: "Marmaduke",
             movie4: "Transformers",
             movie5: "Mr Poppins Penguins",
             movie6: "Harry Potter",
             movie7: "Lord of the Rings",
             movie8: "Half Baked",
             movie9: "Mad Max",
             keyword1: "ant",
             keyword2: "bee",
             keyword3: "dog",
             keyword4: "autobot",
             keyword5: "penguins",
             keyword6: "wizard",
             keyword7: "elf",
             keyword8: "weed",
             years: 6,
             months: 5,
             days: 4,
             hours: 3,
             minutes: 2,
             seconds: 1};
  },

  addLayer: function() {
    var newCount = this.state.numberOfMovies + 1;
    this.setState({numberOfMovies: newCount });
  },

  removeLayer: function() {
    var newCount = this.state.numberOfMovies - 1;
    this.setState({numberOfMovies: newCount });
  },

  changeMovieOrKeyword: function(e) {
    this.setState({[e.target.name]: e.target.value});
  },

  render: function() {
    //Determine how many Movie/Keyword layers to render
    var rows = [], i = 0, len = this.state.numberOfMovies;
    while (++i <= len) rows.push(i);
    //Render a div with an ID of mainJumbo, with the contents being a Bootstrap Jumbotron holding the variable content
    return (
      <Jumbotron id="mainJumbo">
            <div>
              <Sentence numberOfMovies={this.state.numberOfMovies} movie1={this.state.movie1} movie2={this.state.movie2} movie3={this.state.movie3} movie4={this.state.movie4} movie5={this.state.movie5} movie6={this.state.movie6} movie7={this.state.movie7} movie8={this.state.movie8} movie9={this.state.movie9} keyword1={this.state.keyword1} keyword2={this.state.keyword2} keyword3={this.state.keyword3} keyword4={this.state.keyword4} keyword5={this.state.keyword5} keyword6={this.state.keyword6} keyword7={this.state.keyword7} keyword8={this.state.keyword8}/>
              <br />
              <br />
              <Result years={this.state.years} months={this.state.months} days={this.state.days} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds}/>
              <br />
              <br />
              <br />
              <br />
              <FormGroup>
                {rows.map(function (i) {
                  return <Input changeMovieOrKeyword={this.changeMovieOrKeyword} layerNumber={i} key={i} movie1={this.state.movie1} movie2={this.state.movie2} movie3={this.state.movie3} movie4={this.state.movie4} movie5={this.state.movie5} movie6={this.state.movie6} movie7={this.state.movie7} movie8={this.state.movie8} movie9={this.state.movie9} keyword1={this.state.keyword1} keyword2={this.state.keyword2} keyword3={this.state.keyword3} keyword4={this.state.keyword4} keyword5={this.state.keyword5} keyword6={this.state.keyword6} keyword7={this.state.keyword7} keyword8={this.state.keyword8} />;
                }, this)}
              </FormGroup>
              <InputButtons addLayer={this.addLayer} removeLayer={this.removeLayer} numberOfMovies={this.state.numberOfMovies}/>
            </div>
      </Jumbotron>
    );
  }
});

//Export the JumbotronInstance component class
module.exports = JumbotronInstance;
