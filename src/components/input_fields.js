import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';

class InputFields extends Component {
  renderField(field) {
    return (
      <div className='form-group' >
        <label>{field.label}</label>
        <input
          type="text"
          className="form-control"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <span className="fields input-group" key={this.props.index}>

          <Field
            label="Movie"
            name={`movie${this.props.index}`}
            component={this.renderField}
          />
          <Field
            label="Keyword"
            name={`keyword${this.props.index}`}
            component={this.renderField}
          />

      </span>
    );
  }
}



export default InputFields;
