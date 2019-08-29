//this will be a form that updates contacts 
import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    isToggle: false,
    name: this.props.contact.name,
    handle: this.props.contact.handle,
    avatarURL: this.props.contact.avatarURL
  };
  toggle = () => {
    this.setState({
      isToggle: !this.state.isToggle
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    //console.log(this.props);
    this.props.updateList(this.props.contact.id, this.state);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value //es7 concept : object interpolation 
    });
  };
  render() {
    //contact will be here 
    console.log("props of Toggle: ", this.props)

    return (<div>
      {console.log('update form is rendered')}
      <button onClick={this.toggle}>Toggle</button>
      {/* if isToggle is true, then show the form */}
      {this.state.isToggle && <form onSubmit={this.handleSubmit}>
        <input name="name" value={this.state.name} onChange={this.handleChange} />
        <input name="handle" value={this.state.handle} onChange={this.handleChange} />
        <input name="avatarURL" value={this.state.avatarURL} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
      }
    </div>);
  }
}

export default Toggle;