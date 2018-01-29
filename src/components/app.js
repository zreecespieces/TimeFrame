import React, { Component } from 'react';
import Sentence from './sentence';
import Form from './form';
import Result from './result';

export default class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <img src="/src/img/title.png" className="img-fluid" alt="Responsive image"/>
        React simple starter
        <Sentence />
        <Form />
        <Result />
      </div>
    );
  }
}
