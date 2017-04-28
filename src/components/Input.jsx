//Import the react module
var React = require('react');
//Import the Form Bootstrap component
var Form = require('react-bootstrap/lib/Form');
//Import the FormGroup Bootstrap component
var FormGroup = require('react-bootstrap/lib/FormGroup');
//Import the FormControl Bootstrap component
var FormControl = require('react-bootstrap/lib/FormControl');
//Import the Col Bootstrap Component
var Col = require('react-bootstrap/lib/Col');
//Import the ControlLabel Bootstrap Component
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
//Import the ButtonToolbar bootstrap component
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
//Import the InputButtons component
var InputButtons = require('./InputButtons.jsx');

//Define Input stateless functional component class
function Input(props) {
  //Make the variable layerNumber hold the value of how many layers there are based on the passed props
  var layerNumber = props.layerNumber;
  //Make the variable movie which holds the string 'movieX' where X is the layerNumber
  var movie = "movie" + layerNumber.toString();
  //Make the variable keyword which holds the string 'keywordX' where X is the layerNumber
  var keyword = "keyword" + layerNumber.toString();
  //Make the variable movieValue which holds the actual movie title currently stored inside the current layer's movie field
  var movieValue = eval( "props.movie" + layerNumber.toString() );
  //Make the variable keywordValue which holds the actual keyword currently stored inside the current layer's keyword field
  var keywordValue = eval( "props.keyword" + layerNumber.toString() );
  //Define the variable content to hold everything that needs to be displayed
  var content;
  //If the current layer is the last movie, only render a movie field along with all of the Input Buttons. Whenever this input field is changed, the value typed in is stored in both the HTML 'value' attribute of the element but also in the Jumbotron component's state. It also sets the HTML 'name' value to 'movieX' where X is the layerNumber
  if (layerNumber == props.numberOfMovies) {
    content = (
      <span>
        <Form onSubmit={props.handleSubmit} inline>
          <FormGroup controlId="movieAndKeyword">
            <Col componentClass={ControlLabel} sm={2} >
              Movie
            </Col>
            <Col sm={4} >
              <FormControl type="text" onChange={props.changeMovieOrKeyword} name={movie} value={movieValue} placeholder="Select movie" />
            </Col>
          </FormGroup>
          <br/>
          <Col sm={4} >
            <InputButtons addLayer={props.addLayer} removeLayer={props.removeLayer} numberOfMovies={props.numberOfMovies}/>
          </Col>
        </Form>
        <br/>
      </span>
    );
  }
  //Otherwise, render a movie field and a keyword field, along with all of the Input Buttons. Whenever input fields are changed, the value typed in is stored in both the HTML 'value' attribute of the element but also in the Jumbotron component's state. It also sets the HTML 'name' value to 'movieX' or 'keywordX' where X is the layerNumber
  else {
    content = (
      <span>
        <Form inline>
          <FormGroup controlId="movieAndKeyword">
            <Col componentClass={ControlLabel} sm={2}>
              Movie
            </Col>
            <Col sm={4}>
              <FormControl type="text" onChange={props.changeMovieOrKeyword} name={movie} value={movieValue} placeholder="Select movie" />
            </Col>
          </FormGroup>

          <FormGroup controlId="movieAndKeyword">
            <Col componentClass={ControlLabel} sm={2}>
              Keyword
            </Col>
            <Col sm={4} smOffset={1}>
              <FormControl type="text" onChange={props.changeMovieOrKeyword} name={keyword} value={keywordValue} placeholder="Enter keyword" />
            </Col>
          </FormGroup>
        </Form>
        <br/>
      </span>
    );
  }
  //Return the variable content whose value was decided by the above conditional statement
  return (
    <div>
      {content}
    </div>
  );
}

//Export the Input stateless functional component class
module.exports = Input;
