import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  render() {
    console.log(this.props)
    return (<div>
      <h1> Login </h1>
      <form onSubmit={this.props.handleFormSubmit}>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="username"></input>
        <button type="submit">Submit</button>

      </form>
      <p>Dont have an account? <Link to="/register">Register</Link></p>


    </div>);
  }
}

export default Login