//Import the react module
var React = require('react');
//Import the Title component
var Title = require('./Title.jsx');
//Import the JumbotronInstance Component
var JumbotronInstance = require('./JumbotronInstance.jsx');
//Import the Grid Bootstrap Component
var Grid = require('react-bootstrap/lib/Grid');
//Import the Row Bootstrap Component
var Row = require('react-bootstrap/lib/Row');
//Import the Col Bootstrap Component
var Col = require('react-bootstrap/lib/Col');

//Define a component class named Layout, which will hold all the components for our app
var Layout = React.createClass({
  render: function() {
    return (
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
