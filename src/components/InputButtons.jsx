//Import the react module
var React = require('react');
//Import the Button bootstrap component
var Button = require('react-bootstrap/lib/Button');
//Import the ButtonToolbar bootstrap component
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
//Import the SubmitButton component
var SubmitButton = require('./SubmitButton.jsx');

//Define a stateless functional component called InputButtons
function InputButtons(props) {
  //Define a variable named content which will hold anything we need to display
  var content;
  //If there are more than two movies selected but no more than eight, return a React-Bootstrap button to add a layer, remove a layer, and the SubmitButton component, all inside a button toolbar so they are aligned together.
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
  //Or if there are greater than eight movies selected, only display the button to remove a layer and to submit what is typed in.
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
  //Otherwise, just display a button to add a layer and to submit what has been typed in.
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
  //Return the variable content whose value was decided by the above conditional statement
  return (
    <div>
      {content}
    </div>
  );
}

//Export the InputButtons stateless functional component class
module.exports = InputButtons;
