import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Login from './Login'



class Home extends Component {
  state = {}
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Home</h1>

        <Link to={`${this.props.match.url}register`}> Register </Link>
        <Link to={`${this.props.match.url}login`}> Login </Link>
      </div>
    );
  }
}


const Register = (props) => {
  console.log(props)
  return (
    <div>
      <h1> Register </h1>
      <form>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="username"></input>
        <button type="submit">Submit</button>
      </form>
      <p>Already registered? <Link to="/login">Login</Link></p>
    </div>
  )
}

const Dashboard = (props) => {
  console.log("from dashboard", props)
  return (<div>
    <h1>Dashboard. You entered a protected route.</h1>
    <button onClick={() => props.isLogout()}>Logout</button>
  </div>);
}

const Error = () => {
  return (<div>
    <h1> Not allowed. </h1>
    <p>Please log in first. <Link to="/login">login</Link></p>
  </div>);
}



class App extends Component {
  state = {
    loggedIn: false
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      loggedIn: true
    })
  };

  isLogout = () => {
    this.setState({
      loggedIn: false
    })
  }

  render() {


    return (
      <div>


        <Link to="/" >Home</Link>
        <Link to="/dashboard" > Dashboard </Link>


        <hr />

        {this.state.loggedIn ? <Route path='/dashboard' component={() => <Dashboard isLogout={this.isLogout} />} /> : <Route path="/dashboard" component={Error} />}
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={() => <Login handleFormSubmit={this.handleFormSubmit} />} />

        </Switch>



      </div>
    );
  }
}



export default App;



// {/* switch matches teh first object and returns it */ }
// {/* a href refreshes the page. Link tag simply shows those components */ }
// {/* exact: route must match exactly. with exact and switch you dont have to worry about how your routes are placed */ }
// {/* Navlink to add colour */ }


