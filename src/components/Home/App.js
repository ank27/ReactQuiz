import React, { Component } from 'react';
import './App.css';
import {RaisedButton, AppBar} from 'material-ui'
import Footer from './Footer'
import AppBody from './AppBody'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar titleStyle={{fontSize:'18px'}} title="TechQuiz" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <AppBody />
        <div className="App-intro"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
