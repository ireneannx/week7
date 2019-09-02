import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, Redirect } from 'react-router-dom'
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

  </div>);
}

const Error = () => {
  return (<div>
    <h1> Not allowed. </h1>
    <p>Please log in first. <Link to="/login">login</Link></p>
  </div>);
}



const ProtectedRoute = ({ component: Component, isAuth, ...props }) => {
  console.log("props from private route", props)
  return <Route
    {...props}
    render={(props) => isAuth === true ?
      <Component {...props} />
      :
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }
  />
}

class App extends Component {
  state = {
    loggedIn: false
  }

  isLoginHandler = () => {

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

        <button onClick={() => this.isLogout()}>Logout</button>



        <hr />

        {/* Using path from history to redirect user back to where they came from after logging in */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' render={(props) => <Login {...props} isLoginHandler={this.isLoginHandler} loggedIn={this.state.loggedIn} />} />

          {/* when you wanna enter protected route  */}
          <ProtectedRoute exact path='/dashboard' isAuth={this.state.loggedIn} component={Dashboard} isLogout={this.isLogout} />

        </Switch>
      </div>
    );
  }
}

export default App;



// NOTE: Route itself is an component. You're importing it from Browser Router. 
// {/* switch matches teh first object and returns it */ }
// {/* a href refreshes the page. Link tag simply shows those components */ }
// {/* exact: route must match exactly. with exact and switch you dont have to worry about how your routes are placed */ }
// {/* Navlink to add colour */ }


