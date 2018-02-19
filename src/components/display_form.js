import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchRuntime, fetchScript } from '../actions';

import InputFields from './input_fields';

class DisplayForm extends Component {
  constructor(props) {
    super(props);

    this.state = {layerNumber: 2};

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
    var nums = [], i = 0, len = this.state.layerNumber;
    while (++i <= len) nums.push(`${i-1}`);

    nums.map((e) =>
      this.props.fetchRuntime(eval(`values.movie${e}`))
    );

    nums.map((e) =>
      this.props.fetchScript(eval(`values.movie${e}`), eval(`values.keyword${e}`))
    );
  }

  render(){
    const { handleSubmit } = this.props;
    const twoButtons = (
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-secondary" onClick={this.addLayer}>Add Layer</button>
        <button type="button" className="btn btn-secondary" onClick={this.removeLayer}>Remove Layer</button>
      </div>
    );

    const oneButton = (
      <button className="btn btn-secondary" onClick={this.addLayer}>Add Layer</button>
    );

    return (
      <div className="custom-form" className="col-xs-4">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          {[...Array(this.state.layerNumber)].map((e, i) =>
            <InputFields key={i} index={i} numberOfMovies={this.state.layerNumber - 1}/>
            )}
          <br />
          <div className="btn-group" role="group">
            {this.state.layerNumber < 3 ? oneButton : twoButtons}
            <button type="submit" className="btn btn-secondary">Submit</button>
          </div>
        </form>
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
