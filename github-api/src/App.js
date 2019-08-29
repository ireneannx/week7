import React, { Component } from 'react';
import './App.css';
import GitForm from './Form'

class App extends Component {
  state = {
    isLoading: true
  }


  render() {

    return (
      <div>

        <GitForm componentDidMount={this.componentDidMount} />

      </div>);
  }
}



export default App;