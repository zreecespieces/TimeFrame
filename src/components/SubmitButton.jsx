//Import the react module
var React = require('react');
//Import the Button bootstrap component
var Button = require('react-bootstrap/lib/Button');

function SubmitButton(props) {
  return (
    <Button bsSize="small" type='submit'>
      Submit
    </Button>
  );
}

//Export the SubmitButton stateless functional component
module.exports = SubmitButton;
