import React, { Component } from 'react';

class InputFields extends Component {
  constructor(props) {
    super(props);

    this.state = {keyword: '',
                  movie: '' };

    this.onMovieChange = this.onMovieChange.bind(this);
    this.onKeywordChange = this.onKeywordChange.bind(this);
  }

  onMovieChange(event) {
    this.setState({ movie: event.target.value });
  }

  onKeywordChange(event) {
    this.setState({ keyword: event.target.value });
  }

  render() {
    return (
      <span className="fields input-group" key={this.props.index}>

        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Enter a movie"
            className="form-control"
            value={this.state.movie}
            onChange={this.onMovieChange} />
        </form>

        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Enter a keyword"
            className="form-control"
            value={this.state.keyword}
            onChange={this.onKeywordChange} />
        </form>

      </span>
    );
  }
}

export default InputFields;
