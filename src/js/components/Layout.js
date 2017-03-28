//Import the react module
var React = require("react");
//Import the Title component
var Title = require("./Title");

//Define a component class named Layout, which will hold all the components for our app
var Layout = React.createClass({
  render: function() {
    return (
      //Render a Bootstrap row with one column, and inside the column render a Title component and pass it the pageTitle props with a value of Timeframe
      <div class="row">
        <div class="col-lg-12">
          <Title pageTitle="Timeframe"/>
        </div>
      </div>
    )
  }
});

//Export the Layout component class
module.exports = Layout;
