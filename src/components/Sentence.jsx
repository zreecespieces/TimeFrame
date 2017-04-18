//Import the react module
var React = require('react');

//Define Sentence stateless functional component class
function Sentence(props) {
  var rows = [], i = 0, len = props.numberOfMovies;
  while (++i <= len) rows.push(i);

  return (
    <p>
      {"Watching "}
      {rows.map(function (i) {
        var movie = "props.movie" + i.toString();
        var keyword = "props.keyword" + i.toString();
        var lastWord;

        if (i < props.numberOfMovies) {
          lastWord = <span key={i} >{", but every time they say "}<span className="red-text">{"'" + eval(keyword) + "'"}</span>{" it's replaced with "}</span>;
        }

        return <span key={i} ><span className="red-text">{eval(movie)}</span>{lastWord}</span>;
      })}
      {" would take:" }
    </p>
  );
}

//Export the Sentence component class
module.exports = Sentence;
