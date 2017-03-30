//Import the react module
var React = require('react');

//Define Result react component class
var Result = React.createClass({
  render: function() {
    return (
      <div>
        <p>
          <span className="red-text">{this.props.years}</span> Years <span className="red-text">{this.props.months}</span> Months <span className="red-text">{this.props.days}</span> Days <span className="red-text">{this.props.minutes}</span> Minutes <span className="red-text">{this.props.seconds}</span> Seconds
        </p>
      </div>
    )
  }
});

//Export the Result component class
module.exports = Result;
