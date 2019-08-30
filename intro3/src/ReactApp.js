import React, { Component } from 'react';
import P1 from "./P1";
import P2 from "./P2";
import P3 from "./P3";
import P4 from "./P4";

class MainApp extends Component {
  state = {
    page: 1,
    firstname: '',
    lastname: '',
    email: '',
    ocupation: '',
    city: '',
    bio: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value //es7 concept : object interpolation 
    });
  };

  addPage = (e) => {
    e.preventDefault()
    this.setState({
      page: this.state.page + 1
    })
  }

  subtractPage = (e) => {
    e.preventDefault()
    this.setState({
      page: this.state.page - 1
    })
  }

  render() {

    switch (this.state.page) {
      case 1:
        return (<P1 addPage={this.addPage} handleChange={this.handleChange} {...this.state} />)
      case 2:
        return (<P2 subtractPage={this.subtractPage} addPage={this.addPage} handleChange={this.handleChange}  {...this.state} />);
      case 3:
        return (<P3 subtractPage={this.subtractPage} addPage={this.addPage} handleChange={this.handleChange}  {...this.state} />)
      case 4:
        return (<P4 />)
      default:
        return (<P1 addPage={this.addPage} handleChange={this.handleChange} {...this.state} />)
    }
  }
}

export default MainApp;