import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRuntime, fetchScript } from '../actions';

import InputFields from './input_fields';

class DisplayForm extends Component {
  constructor(props) {
    super(props);

    this.state = {layerNumber: 1};

    this.addLayer = this.addLayer.bind(this);
    this.removeLayer = this.removeLayer.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  addLayer() {
    var newLayer = this.state.layerNumber + 1;
    this.setState({layerNumber: newLayer });
  }

  removeLayer() {
    var newLayer = this.state.layerNumber - 1;
    this.setState({layerNumber: newLayer });
  }

  onFormSubmit() {

  }

  render(){
    return (
      <div className="col-xs-4">
        <button className="btn btn-primary" onClick={this.props.fetchRuntime}>Runtime</button>
        <button className="btn btn-primary" onClick={this.props.fetchScript}>Script</button>

        {[...Array(this.state.layerNumber)].map((e, i) =>
          <InputFields key={i} index={i}/>
          )}

        <button className="btn btn-primary" onClick={this.addLayer}>Add Layer</button>
        <button className="btn btn-primary" onClick={this.removeLayer}>Remove Layer</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, { fetchRuntime, fetchScript })(DisplayForm);
