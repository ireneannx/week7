// using method from older versions <16.5

import React from 'react';

class CC extends React.Component{
  constructor(props){
    super(props)
    this.state = { count : 0} //state of CC
      console.log("CC constructor", this)
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
  }

  increment(){
    console.log("inside method increment", this)
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement(){
    console.log("inside method decrement", this)
    this.setState({
      count: this.state.count - 1
    })
  }


  render(){
    return(
      <div>
        <hr></hr>
        <h1> Version before horizontal class fields</h1>
        <h1> Count: {this.state.count}</h1>
        <button onClick={this.increment}>Inc</button>
        <button onClick={this.decrement}>Dec</button>
      </div>
    )
  }
  
}

export default CC 