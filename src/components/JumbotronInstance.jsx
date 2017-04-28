//Import the react module
var React = require('react');
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
  //Defines the inital state of the component. This contains all possible movies and keywords with blank placeholders
  getInitialState: function () {
    return { numberOfMovies: 2,
             movie1: "Interstellar",
             movie2: "Birdman",
             movie3: "",
             movie4: "",
             movie5: "",
             movie6: "",
             movie7: "",
             movie8: "",
             movie9: "",
             keyword1: "space",
             keyword2: "",
             keyword3: "",
             keyword4: "",
             keyword5: "",
             keyword6: "",
             keyword7: "",
             keyword8: ""};
  },
  //Define a function which will increment the number of movies by one
  addLayer: function() {
    var newCount = this.state.numberOfMovies + 1;
    this.setState({numberOfMovies: newCount });
  },
  //Define a function which will decrement the number of movies by one
  removeLayer: function() {
    var newCount = this.state.numberOfMovies - 1;
    this.setState({numberOfMovies: newCount });
  },
  //Define a funciton which will change the state of the specified name to the specified value contained by the input element. In other words, this function changes whatever movie or keyword in state to whatever the edited movie's or keyword's value currently is
  changeMovieOrKeyword: function(e) {
    this.setState({[e.target.name]: e.target.value});
  },
  //Define a function which will submit all the current field values to the server for the computation to be made
  handleSubmit: function() {
    fetch('/result', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numberOfMovies: this.state.numberOfMovies,
        movie1: this.state.movie1,
        movie2: this.state.movie2,
        movie3: this.state.movie3,
        movie4: this.state.movie4,
        movie5: this.state.movie5,
        movie6: this.state.movie6,
        movie7: this.state.movie7,
        movie8: this.state.movie8,
        movie9: this.state.movie9,
        keyword1: this.state.keyword1,
        keyword2: this.state.keyword2,
        keyword3: this.state.keyword3,
        keyword4: this.state.keyword4,
        keyword5: this.state.keyword5,
        keyword6: this.state.keyword6,
        keyword7: this.state.keyword7,
        keyword8: this.state.keyword8
      })
    });
  },

  render: function() {
    //Create an array of numbers corresponding to the current number of movies selected
    var rows = [], i = 0, len = this.state.numberOfMovies;
    while (++i <= len) rows.push(i);
    //Render a div with an ID of mainJumbo, with the contents being a Bootstrap Jumbotron holding the variable content. First it displays the dynamic sentence based on what the user has typed in, followed by the result of the computation which is being fed here from the server. Then return all the necessary input fields based on the number of movies selected. Lastly, run a script which grabs the result and sets it as the new props.
    return (
      <Jumbotron id="mainJumbo">
            <div>
              <Sentence numberOfMovies={this.state.numberOfMovies} movie1={this.state.movie1} movie2={this.state.movie2} movie3={this.state.movie3} movie4={this.state.movie4} movie5={this.state.movie5} movie6={this.state.movie6} movie7={this.state.movie7} movie8={this.state.movie8} movie9={this.state.movie9} keyword1={this.state.keyword1} keyword2={this.state.keyword2} keyword3={this.state.keyword3} keyword4={this.state.keyword4} keyword5={this.state.keyword5} keyword6={this.state.keyword6} keyword7={this.state.keyword7} keyword8={this.state.keyword8}/>
              <br />
              <br />
              <Result years={this.props.years} days={this.props.days} hours={this.props.hours} minutes={this.props.minutes} />
              <br />
              <br />
              <br />
              <br />
              <FormGroup>
                  {rows.map(function (i) {
                    return <Input addLayer={this.addLayer} removeLayer={this.removeLayer} numberOfMovies={this.state.numberOfMovies} handleSubmit={this.handleSubmit} changeMovieOrKeyword={this.changeMovieOrKeyword} layerNumber={i} key={i} movie1={this.state.movie1} movie2={this.state.movie2} movie3={this.state.movie3} movie4={this.state.movie4} movie5={this.state.movie5} movie6={this.state.movie6} movie7={this.state.movie7} movie8={this.state.movie8} movie9={this.state.movie9} keyword1={this.state.keyword1} keyword2={this.state.keyword2} keyword3={this.state.keyword3} keyword4={this.state.keyword4} keyword5={this.state.keyword5} keyword6={this.state.keyword6} keyword7={this.state.keyword7} keyword8={this.state.keyword8} />;
                  }, this)}
                </FormGroup>
                <script dangerouslySetInnerHTML={{
                    __html: 'window.PROPS=' + JSON.stringify(this.props)
                  }} />
            </div>
      </Jumbotron>
    );
  }
});

//Export the JumbotronInstance stateless functional component class
module.exports = JumbotronInstance;
