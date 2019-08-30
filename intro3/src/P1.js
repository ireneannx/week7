import React from 'react';

const P1 = (props) => {
  return (
    <div style={{ border: '2px solid blue' }}>
      <h1>Contact Details </h1>
      <form onSubmit={props.addPage}>
        <input name="firstname" placeholder="firstname" value={props.firstname} onChange={props.handleChange} />
        <input name="lastname" placeholder="lastname" value={props.lastname} onChange={props.handleChange} />
        <input name="email" placeholder="email" value={props.email} onChange={props.handleChange} />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default P1;
