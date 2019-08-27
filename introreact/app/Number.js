//returns random numbers. if rand number is 5 then prints hello + random image, else 'sorry'.
import React from 'react';

//class based component. can assign a state 
class Number extends React.Component{
  render(){
    console.log('Number component', this.props)
    const num = this.props.getNum()
    console.log(num);
    return(
      //UI. jsx
      <div>
        <h1> Number component </h1>
        {num==5? "hello":"sorry"}
        {num==5 && <img src="https://picsum.photos/200/300"></img>}
      </div>
    )
  }
}

//ES modules
export default Number 