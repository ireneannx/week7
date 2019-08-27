import React from 'react'
const friends = ["tom", "dick", "harry"]

class List extends React.Component { //there are components in react which you are creating 
  render() {
    return (//everything in return is the jsx part
      <div>
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