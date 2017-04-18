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

//Define Input stateless functional component class
function Input(props) {

  var layerNumber = props.layerNumber;

  var movie = "movie" + layerNumber.toString();
  var keyword = "keyword" + layerNumber.toString();
  var movieValue = eval( "props.movie" + layerNumber.toString() );
  var keywordValue = eval( "props.keyword" + layerNumber.toString() );

  return (
    <div>
      <Form inline method="post" action="/result">
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
    </div>
  );
}

//Export the Input component class
module.exports = Input;
