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
    const bothFields =
      <span className="fields input-group" key={this.props.index}>
        <Field
            defaultValue="Enter a movie"
            label="Movie"
            name={`movie${this.props.index}`}
            component={this.renderField}
        />
        <Field
          defaultValue="Enter a keyword"
          label="Keyword"
          name={`keyword${this.props.index}`}
          component={this.renderField}
        />
      </span>;

      const singleField =
        <span className="fields input-group" key={this.props.index}>
          <Field
              defaultValue="Enter a movie"
              label="Movie"
              name={`movie${this.props.index}`}
              component={this.renderField}
          />
        </span>;

      return(
        <div>
          {this.props.index == this.props.numberOfMovies ? singleField : bothFields}
        </div>
      );
  }
}


export default InputFields;
