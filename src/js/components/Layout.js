//Import the react module
var React = require("react");
//Import the Title component
var Title = require("./Title");

//Define a component class named Layout, which will hold all the components for our app
var Layout = React.createClass({
  render: function() {
    return (
      //Render a Bootstrap row
      <div class="row">
        //Render a Bootstrap column
        <div class="col-lg-12">
          //Render a Title component and passes it the pageTitle props with a value of Timeframe
          <Title pageTitle="Timeframe"/>
        </div>
      </div>
    )
  }
});

//Export the Layout component class
module.exports = Layout;
