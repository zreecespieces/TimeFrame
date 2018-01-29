import React, { Component } from 'react';
import Sentence from './sentence';
import Form from './form';
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
            <div className="row">
              <Sentence />
              <Result />
            </div>
            <div className="row">
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
