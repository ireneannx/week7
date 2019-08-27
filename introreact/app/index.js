//react component 

import React from 'react' //same as const react = require('react')
import ReactDOM from 'react-dom' //dom will render the app

//created component App 
class App extends React.Component{
  render(){
    return(
      //ui will go here 
      <div>
        <h1>Welcome to React</h1>
        <h2>eyyyyyy</h2>
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