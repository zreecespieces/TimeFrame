//Import the react module
var React = require('react');

//Define Result react component class
var Result = React.createClass({
  render: function() {
    //Render the total time it would take for the given combination and present it in the form Y Years M Months D Days H Hours M Minutes S Seconds
    return (
      <div>
        <p>
          <span className="red-text">{this.props.years}</span> Years <span className="red-text">{this.props.months}</span> Months <span className="red-text">{this.props.days}</span> Days <span className="red-text">{this.props.hours}</span> Hours <span className="red-text">{this.props.minutes}</span> Minutes <span className="red-text">{this.props.seconds}</span> Seconds
        </p>
      </div>
    )
  }
});

//Export the Result component class
module.exports = Result;
