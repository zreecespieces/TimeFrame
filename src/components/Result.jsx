//Import the react module
var React = require('react');

//Define the stateless functional component Result
function Result(props) {
  //Render the total time it would take for the given combination and present it in the form Y Years M Months D Days H Hours M Minutes S Seconds
  return (
    <div>
      <p>
        <span className="red-text">{props.years}</span> Years <span className="red-text">{props.months}</span> Months <span className="red-text">{props.days}</span> Days <span className="red-text">{props.hours}</span> Hours <span className="red-text">{props.minutes}</span> Minutes <span className="red-text">{props.seconds}</span> Seconds
      </p>
    </div>
  );
}

//Export the Result component class
module.exports = Result;
