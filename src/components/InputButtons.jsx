//Import the react module
var React = require('react');
//Import the Button bootstrap component
var Button = require('react-bootstrap/lib/Button');
//Import the ButtonToolbar bootstrap component
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
//Import the SubmitButton component
var SubmitButton = require('./SubmitButton.jsx');

function InputButtons(props) {
  var content;
  if (props.numberOfMovies > 2 && props.numberOfMovies <= 8) {
    content = (
      <ButtonToolbar>
        <Button bsSize="small" onClick={props.addLayer}>
          Add layer
        </Button>

        <Button bsSize="small" onClick={props.removeLayer}>
          Remove layer
        </Button>

        <SubmitButton />

      </ButtonToolbar>
    );
  }
  else if (props.numberOfMovies > 8) {
    content = (
      <ButtonToolbar>
        <Button bsSize="small" onClick={props.removeLayer}>
          Remove layer
        </Button>

        <SubmitButton />

      </ButtonToolbar>
    );
  }
  else {
    content = (
      <ButtonToolbar>
        <Button bsSize="small" onClick={props.addLayer}>
          Add layer
        </Button>

        <SubmitButton />

      </ButtonToolbar>
    );
  }
  return (
    <div>
      {content}
    </div>
  );
}

//Export the InputButtons component class
module.exports = InputButtons;
