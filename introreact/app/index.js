//react component 

import React from 'react' //same as const react = require('react')
import ReactDOM from 'react-dom' //dom will render the app
import List from './List' //imported List to component  

//created component App 
class App extends React.Component{
  render(){
    return( //anythinng sad in return statement will get rendered to app. 
      //ui will go here 
      // need to wrap in div because jsx will not parse otherwise 
      <div> 
        <h1>Welcome to React</h1>
        <h2>eyyyyyy</h2>
        <List/>
      </div>
    )
  }
}

//pass app component to react dom
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

//jsx is neither a string not html syntax. its an extension of javascript 
//to generate UI use oarantheis 
//to parse js inside JSX use curly braces 