import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isRedirect: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    this.props.isLoginHandler()
    this.isRedirectAuth();

  };

  isRedirectAuth = () => {
    this.setState({
      isRedirect: true
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log("inside login", this.props);
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    console.log('from /******', from)
    if (this.state.isRedirect) {
      return (<Redirect to={from.pathname} />)
    }

    return (<div>
      <h1> Login </h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="username" onChange={this.handleChange}></input>
        <input type="text" placeholder="username" onChange={this.handleChange}></input>
        <button type="submit">Submit</button>

      </form>
      <p>Dont have an account? <Link to="/register">Register</Link></p>


    </div>);
  }
}

export default Login