//Import the react module
var React = require('react');

//Render the instructions sentence in a paragraph inside a div as a stateless functional component
function Instructions() {
  return (
    <div>
      <p>Begin by searching for your first movie, then select what word in the movie you want to be replaced by the next movie, and then search for your second movie. You can add as many layers as you'd like!</p>
    </div>
  );
}

//Export the Instructions component class
module.exports = Instructions;
