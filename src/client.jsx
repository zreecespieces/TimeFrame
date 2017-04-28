//Import the react module
var React = require("react");
//Import the react-dom module
var ReactDOM = require("react-dom");
//Import the Layout component
var Layout = require("./components/Layout.jsx");

//Grab the DOM element with an ID of app as the node where all the components will render
const app = document.getElementById('app');
//Render the application to the DOM
if (typeof window !== "undefined") {
  window.onload = function() {
    var props = window.PROPS;
    ReactDOM.render(
      React.createElement(Layout, props),
      app
    );
  };
}
