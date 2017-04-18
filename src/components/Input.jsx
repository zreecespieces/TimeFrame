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

  var movie = eval( "props.movie" + layerNumber.toString() );
  var keyword = eval( "props.keyword" + layerNumber.toString() );

  return (
    <div>
      <Form inline>
        <FormGroup controlId="movieAndKeyword">
          <Col componentClass={ControlLabel} sm={2}>
            Movie
          </Col>
          <Col sm={4}>
            <FormControl type="text" onChange={props.changeMovie} value={movie} placeholder="Select movie" />
          </Col>
        </FormGroup>

        <FormGroup controlId="movieAndKeyword">
          <Col componentClass={ControlLabel} sm={2}>
            Keyword
          </Col>
          <Col sm={4} smOffset={1}>
            <FormControl type="text" onChange={props.changeKeyword} value={keyword} placeholder="Enter keyword" />
          </Col>
        </FormGroup>
      </Form>
      <br/>
    </div>
  );
}

//Export the Input component class
module.exports = Input;
