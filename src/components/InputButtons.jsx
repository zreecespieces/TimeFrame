//Import the react module
var React = require('react');
//Import the Button bootstrap component
var Button = require('react-bootstrap/lib/Button');
//Import the ButtonToolbar bootstrap component
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');

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
      </ButtonToolbar>
    );
  }
  else if (props.numberOfMovies > 8) {
    content = (
      <Button bsSize="small" onClick={props.removeLayer}>
        Remove layer
      </Button>
    );
  }
  else {
    content = (
      <Button bsSize="small" onClick={props.addLayer}>
        Add layer
      </Button>
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
