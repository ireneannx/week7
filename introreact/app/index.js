//react component 

import React from 'react' //same as const react = require('react')
import ReactDOM from 'react-dom' //dom will render the app
import List from './List' //imported List to component  
import Number from './Number' //imported Number component

//generally all functions will be in this page so you can reuse it 
function getsNum(){
  return Math.floor((Math.random()*10)+1);
}

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

        {/* Number component renders here  */}
        <Number getNum = {getsNum}/> 
        {/* getNum from Number.js will be available as getsNum here */}
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