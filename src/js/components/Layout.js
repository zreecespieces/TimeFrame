//Import the react module
var React = require('react');
//Import the Title component
var Title = require('./Title');
//Import the Grid Bootstrap Component
var Grid = require('react-bootstrap/lib/Grid');
//Import the Row Bootstrap Component
var Row = require('react-bootstrap/lib/Row');
//Import the Col Bootstrap Component
var Col = require('react-bootstrap/lib/Col');
//Import the JumbotronInstance Component
var JumbotronInstance = require('./JumbotronInstance');

//Define a component class named Layout, which will hold all the components for our app
var Layout = React.createClass({
  render: function() {
    return (
      //Render a Bootstrap grid that has a row with two column, and inside the column render a Title component and pass it the pageTitle props with a value of Timeframe
      <Grid>
        <Row>
          <Col lg={12}>
            <Title pageTitle="Timeframe"/>
          </Col>
          <Col lg={12}>
            <JumbotronInstance/>
          </Col>
        </Row>
      </Grid>
    )
  }
});

//Export the Layout component class
module.exports = Layout;
