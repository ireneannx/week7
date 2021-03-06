//prints out list 

import React from 'react'
const friends = ["tom", "dick", "harry"] //generaly this data should be in index,js since it can be reused there but since this is a first example, we didnt do that 

class List extends React.Component { //there are components in react which you are creating //abstarcting all teh components that React has 
  render() {
    return (//everything in return is the jsx part
      <div className="com"> 
      {/* classname is the jsx alternative to class attribute in js */}
        <h1>List of basic people</h1>

        {/* to make js appear in jsx, use curly braces  */}
        {
          friends.map((data) => (
            <div>
              <li>
                {data} 
                {/* curly braces around data because its js */}
              </li>
            </div>
          ))

        }
      </div>
    )
  }
}

export default List 
//List class is exported because it is imported in index.js
//export default is just like module.exports = List 
//props is just an object which is used to pass data from one component to the otehr 