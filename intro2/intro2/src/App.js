// to decrement/increment a variable count
import React from 'react';
import logo from './logo.svg';
import './App.css';
//import from Counter.js
import Counter from './Counter';
//import from CC
import CC from './CC';

class App extends React.Component{
  //after release of private class fields (after v16.5)
  state ={ //state of App component . state is an object 
    count : 0
  }

  //using arrow functions automatically does the binding for you
  increment = ()=>{
    console.log("increment", this) //this is pointing to App 
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = ()=>{
    console.log("decrement", this)
    this.setState({
      count : this.state.count - 1
    })
  }

  //render App
  render(){
    //everything here is JS
    const {count} = this.state; //destructuring
    return(
      // everything here is JSX which is why you must put a div to render it 
      <div>
        {/* jsx */}
        {/* count from here (line 32) will be available as count in Counter.js. Same way, increment and decrement are also getting passed */}
        <Counter count={count}
        increment = {this.increment}
        decrement = {this.decrement}/> 

        <CC />
      </div>
    )
}
}

export default App;
