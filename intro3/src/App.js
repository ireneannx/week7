import React, { Component } from 'react';
import './App.css';
import Nav from './NavChange';
import MainApp from './ReactApp';
import L1 from './Landing/L1'
import L2 from './Landing/L2'
class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <Nav />
        {/* <L1 />
        <L2 /> */}
        <MainApp />
      </div>
    );
  }
}

export default App;


