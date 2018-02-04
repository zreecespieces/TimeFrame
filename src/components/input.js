import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRuntime, fetchScript } from '../actions';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = { layerNumber: 1 };

    this.addLayer = this.addLayer.bind(this);
    this.removeLayer = this.removeLayer.bind(this);
  }

  addLayer() {
    var newLayer = this.state.layerNumber + 1;
    this.setState({layerNumber: newLayer });
  }

  removeLayer() {
    var newLayer = this.state.layerNumber - 1;
    this.setState({layerNumber: newLayer });
  }

  render(){
    return (
      <div className="col-xs-4">
        <button className="btn btn-primary" onClick={this.props.fetchRuntime}>Runtime</button>
        <button className="btn btn-primary" onClick={this.props.fetchScript}>Script</button>
        <button className="btn btn-primary" onClick={this.addLayer}>Increment</button>
        <button className="btn btn-primary" onClick={this.removeLayer}>Decrement</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, { fetchRuntime, fetchScript })(Input);
