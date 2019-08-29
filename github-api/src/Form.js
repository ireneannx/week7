import React, { Component } from 'react';
import axios from "axios";

class GitForm extends Component {
  state = {
    username: '',
    data: '',
    isToggle: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //when clicked
    this.toggle()

    console.log(this.state);
    console.log("props of GitForm class", this.props);

    //making the get request to github 
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        this.setState({
          data: res.data
        })
        //this.state.data = res.data;
      })
      .catch((err) => { throw err })

  };

  toggle = () => {
    this.setState({
      isToggle: !this.state.isToggle
    })
  };


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value //es7 concept : object interpolation 
    });
  };

  render() {
    //console.log("new state: ", this.state)
    const User = this.state.data

    console.log(User)
    return (
      <div>
        <h1> fill username here </h1>
        <form onSubmit={this.handleSubmit}>
          <input name="username" placeholder="username" onChange={this.handleChange}></input>
          <button type="submit">Submit</button>
        </form>

        {this.state.isToggle && <div className="card">

          <div className="card-body" style={{ width: 18 + 'rem' }}>
            <img className="card-img-top" src={User.avatar_url} alt="Card cap" />
            <h5 className="card-title">{User.name}</h5>
            <p className="card-text">{User.bio}</p>
          </div>
        </div>}
        {/* // <div>
        //   <h2>Name : {User.name}</h2>
        //   <p>Login: {User.login}</p>
        //   <p>bio: {User.bio}</p>
        // </div>} */}



      </div>);
  }
}

export default GitForm;