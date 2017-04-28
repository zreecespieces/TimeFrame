//Import the react module
var React = require('react');

//Define the stateless functional component Result
function Result(props) {
  //Render the total time it would take for the given combination and present it in the form Y Years D Days H Hours M Minutes
  //Information is displayed based on the props this component is fed when rendered.
  return (
    <div>
      <p>
        <span className="red-text">{props.years}</span> Years <span className="red-text">{props.days}</span> Days <span className="red-text">{props.hours}</span> Hours <span className="red-text">{props.minutes}</span> Minutes
      </p>
    </div>
  );
}

//Export the Result statless functional component class
module.exports = Result;
