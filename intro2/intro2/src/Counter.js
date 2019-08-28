import React from 'react';

const Counter = (props)=>{
  //JS
  console.log("Counter app", props)
  return(
    // jsx
    <div>
      <h1> Count (method v16.5 and above): {props.count}</h1>
      <button onClick={props.increment}>Inc</button>
      <button onClick={props.decrement}>Dec</button>    
    </div>
  )
}

export default Counter