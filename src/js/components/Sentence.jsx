//Import the react module
var React = require('react');

//Define Sentence react component class
var Sentence = React.createClass({
  //Renders a div with a paragraph containing the dynamic sentence
  render: function() {
    return (
      <div>
        <p>
          Watching <span className="red-text">{this.props.movie1}</span>, but every time they say <span className="red-text">&#39;{this.props.keyword1}&#39;</span> it's replaced with <span className="red-text">{this.props.movie2}</span>, but every time they say <span className="red-text">&#39;{this.props.keyword2}&#39;</span> it's replaced with <span className="red-text">{this.props.movie3}</span> would take:
        </p>
      </div>
    );
  }
});

//Export the Sentence component class
module.exports = Sentence;
