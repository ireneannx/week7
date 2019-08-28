import React from 'react'



class List extends React.Component {
  state = {
    query: ""
  }
  updateQuery = (e) => {
    this.setState({
      query: e.target.value.trim() //remove all white spaces in query 
    })
    //setstate is a function that takes an object: state 
  }
  resetQuery = (e) => {
    this.setState({
      query: ''
    })
  }

  render() {
    const { contacts, removeContacts } = this.props
    const { query } = this.state
    const showContacts = query == "" ? contacts : contacts.filter((c) => c.name.toLowerCase().includes(query.toLowerCase())) //checks if the string in your contacts includes the string in your query 
    return (

      // Query
      <div style={{ border: "2px solid black" }}>
        <h1>Query: {query}</h1>
        <input placeholder="search" value={query} onChange={this.updateQuery} />
        <button onClick={this.resetQuery}> RESET </button>
        {/* Now Showing Section begins */}
        <p> Now Showing {showContacts.length} of {contacts.length}</p>
        {/* Now showing section ends */}

        {/* List */}
        <h1> List </h1>
        {showContacts.map((contact) => (
          <div style={{ border: " 2px dashed red" }} key={contact.id}>
            <h2>{contact.name} : {contact.handle}</h2>
            <img src={contact.avatarURL} style={{ width: "300px", height: "200px" }} />
            <button onClick={() => removeContacts(contact)}>Remove Item</button>
          </div>
        ))}
      </div>
    )
  }

}

// const List = (props) => {
//   console.log('list', props)
//   return (
//     <div style={{ border: "2px solid black" }}>
//       <h1>List </h1>
//       {props.contacts.map((contact) => (
//         <div style={{ border: " 2px dashed red" }} key={contact.id}>
//           <h2>{contact.name} : {contact.handle}</h2>
//           <img src={contact.avatarURL} style={{ width: "300px", height: "200px" }} />
//           <button onClick={() => props.removeContacts(contact)}>Remove Item</button>
//         </div>
//       ))}

//     </div>
//   )
// }


export default List 