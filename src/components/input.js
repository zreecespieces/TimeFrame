import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRuntime, fetchScript } from '../actions';

class Input extends Component {
  render(){
    return (
      <div className="col-xs-4">
        <button className="btn btn-primary" onClick={this.props.fetchRuntime}>Runtime</button>
        <button className="btn btn-primary" onClick={this.props.fetchScript}>Script</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, { fetchRuntime, fetchScript })(Input);
