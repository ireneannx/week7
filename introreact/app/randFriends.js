//prints out random names from friends2 array found in index.js
import React from 'react'

//functional component. Cannot assign a state (as of v16.8)
//props - immutable datastructures 
//abstraction avoid 

//using destructing to pass ({getRand and name}) instead of (data) so that we wont have to repeatedly do data.getRand or data.name
const RandomName = ({getRand, name})=>{
  return (
    
    <div>
      <h1> Random Name </h1>
      {/* jsx */}
      {getRand()} 
      <p> did {name} </p>

    </div>
  )
  
}

export default RandomName
//List class is exported