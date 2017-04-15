//Import the react module
var React = require('react');

//Define Sentence stateless functional component class
function Sentence(props) {
  //Renders a div with a paragraph containing the dynamic sentence
  return (
    <div>
      <p>
        Watching <span className="red-text">{props.movie1}</span>, but every time they say <span className="red-text">&#39;{props.keyword1}&#39;</span> it's replaced with <span className="red-text">{props.movie2}</span>, but every time they say <span className="red-text">&#39;{props.keyword2}&#39;</span> it's replaced with <span className="red-text">{props.movie3}</span> would take:
      </p>
    </div>
  );
}

//Export the Sentence component class
module.exports = Sentence;
