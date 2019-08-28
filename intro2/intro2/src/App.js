// to decrement/increment a variable count
import React from 'react';
//import all components...
import './App.css';
//import from Counter.js
import Counter from './Counter';
//import from CC
import CC from './CC';
//import from List 
import List from './List'
//import from ControlledForm
import User from './ControlledForm'

class App extends React.Component{
  //after release of private class fields (after v16.5)
  state ={ //state of App component . state is an object 
    count : 0,
    //adding some dummy contacts 
    contacts: [
      {
        id: '1',
        name: 'afzal',
        handle: '@afzal',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
      {
        id: '2',
        name: 'tom',
        handle: '@tom',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
      {
        id: '3',
        name: 'Richard',
        handle: '@richard',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
    ]
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

  //remove contacts in List 
  removeContacts = (contact)=>{
    console.log('inside app.js',contact)
    const updateState = this.state.contacts.filter((c)=> c.id !== contact.id)
    console.log('only updated state',updateState)
    this.setState({
      contacts : updateState
    })
  }

  //add to list
  addList = (listitem)=>{
    this.setState({
      contacts: [...this.state.contacts, listitem]
    })
  }

  //render App
  render(){
    //everything here is JS
    const {count, contacts} = this.state; //destructuring
    return(
      // everything here is JSX which is why you must put a div to render it 
      <div>
        {/* jsx */}
        {/* count from here (line 32) will be available as count in Counter.js. Same way, increment and decrement are also getting passed */}
        <Counter count={count}
        increment = {this.increment}
        decrement = {this.decrement}/> 
        <hr/>

        <CC />
        <hr/>

        <List contacts={contacts} removeContacts={this.removeContacts}/>
        <hr/>

        <User addList={this.addList}/>
        <hr/>

      </div>
    )
}
}

export default App;
