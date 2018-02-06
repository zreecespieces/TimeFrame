import React, { Component } from 'react';


class InputFields extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <span className="movieFields" key={this.props.index}>

        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Enter a movie"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange} />
        </form>

      </span>
    );
  }
}

export default InputFields;
