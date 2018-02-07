import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
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
  }

  addLayer() {
    var newLayer = this.state.layerNumber + 1;
    this.setState({layerNumber: newLayer });
  }

  removeLayer() {
    var newLayer = this.state.layerNumber - 1;
    this.setState({layerNumber: newLayer });
  }

  onSubmit(values) {
    console.log(values);
    this.props.fetchRuntime(values.movie0);
    this.props.fetchScript(values.movie0);
  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <div className="col-xs-4">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          {[...Array(this.state.layerNumber)].map((e, i) =>
            <InputFields key={i} index={i}/>
            )}
          <button type="submit" className="btn Thebtn-primary">Submit</button>
        </form>

        <button className="btn btn-primary" onClick={this.addLayer}>Add Layer</button>
        <button className="btn btn-primary" onClick={this.removeLayer}>Remove Layer</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default reduxForm({
  form: 'MovieKeywordForm'
})(
  connect(mapStateToProps, { fetchRuntime, fetchScript })(DisplayForm)
);
