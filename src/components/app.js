import React, { Component } from 'react';
import Sentence from './sentence';
import Form from './form';
import Result from './result';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter</div>
        <Sentence />
        <Form />
        <Result />
      </div>
    );
  }
}
