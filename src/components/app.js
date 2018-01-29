import React, { Component } from 'react';
import Sentence from './sentence';
import Input from './input';
import Result from './result';

export default class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="titleLogo" className="row">
          <img src="/src/img/title.png" className="img-fluid" alt="Responsive image"/>
        </div>
        <div className="row">
          <div className="jumbotron col-xs-12">
            <div id="sentence" className="row">
              <Sentence />
            </div>
            <div id="result" className="row">
              <Result />
            </div>
            <div id="input" className="row">
              <Input />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
