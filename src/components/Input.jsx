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

  var layerNumber = props.layerNumber;

  var movie = "movie" + layerNumber.toString();
  var keyword = "keyword" + layerNumber.toString();
  var movieValue = eval( "props.movie" + layerNumber.toString() );
  var keywordValue = eval( "props.keyword" + layerNumber.toString() );

  var content;

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
            <ButtonToolbar>
              <InputButtons addLayer={props.addLayer} removeLayer={props.removeLayer} numberOfMovies={props.numberOfMovies}/>
            </ButtonToolbar>
          </Col>
        </Form>
        <br/>
      </span>
    );
  }
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

  return (
    <div>
      {content}
    </div>
  );
}

//Export the Input component class
module.exports = Input;
