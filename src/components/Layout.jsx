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

//Define a stateless functional component named Layout, which will hold all the components for our app
function Layout(props) {
  //The layout is organized into a Bootstrap grid with one row, and two columns. The first row contains the title image and the second row contains the Jumbotron with all the content
  return (
    <Grid>
      <Row>
        <Col lg={12}>
          <Title/>
        </Col>
        <Col lg={12}>
          <JumbotronInstance years={props.years} days={props.days} hours={props.hours} minutes={props.minutes}/>
        </Col>
      </Row>
    </Grid>
  );
}

//Export the Layout statless functional component class
module.exports = Layout;
