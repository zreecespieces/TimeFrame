import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sentence extends Component {
  render(){
    return (
      <div className="col-xs-4" id="sentence">Watching
        {!this.props.formValues ?
            ' '
        :
            <div>{Object.values(this.props.formValues.values).map((e) => {
              return e;
            })}</div>}
        blah but every time they say blah it's replaced with blah would take:
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: state.form.MovieKeywordForm
  }
}

export default connect(mapStateToProps)(Sentence);
