//Import the react module
var React = require('react');

//Define a component class of Title
function Title() {
  //Render a div with an ID of Title that is a Bootstrap responsive image
  return (
    <img className="img-responsive" src="/../static/img/title.png" alt="Timeframe" id="Title"/>
  );
}

//Export the Title component class
module.exports = Title;
