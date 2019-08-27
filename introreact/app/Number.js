import React from 'react';

class Number extends React.Component{
  render(){
    console.log('Number component', this.props)
    return(
      //UI. jsx
      <div>
        <h1> Number component </h1>
        {this.props.getNum()}
      </div>
    )
  }
}

//ES modules
export default Number 