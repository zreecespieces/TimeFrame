//Import the react module
var React = require('react');
//Import the Button bootstrap component
var Button = require('react-bootstrap/lib/Button');
//Import the ButtonToolbar bootstrap component
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');

var InputButtons = React.createClass({
  render: function() {
    var content;
    if (this.props.numberOfMovies > 2 && this.props.numberOfMovies <= 8) {
      content = (
        <ButtonToolbar>
          <Button bsSize="small" onClick={this.props.addLayer}>
            Add layer
          </Button>

          <Button bsSize="small" onClick={this.props.removeLayer}>
            Remove layer
          </Button>
        </ButtonToolbar>
      );
    }
    else if (this.props.numberOfMovies > 8) {
      content = (
        <Button bsSize="small" onClick={this.props.removeLayer}>
          Remove layer
        </Button>
      );
    }
    else {
      content = (
        <Button bsSize="small" onClick={this.props.addLayer}>
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
});

//Export the InputButtons component class
module.exports = InputButtons;
