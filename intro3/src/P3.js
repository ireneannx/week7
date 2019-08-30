import React from 'react';

const P3 = (props) => {
  return (
    <div style={{ border: '2px solid blue' }}>
      <h1>Confirm User Details </h1>
      <p>First Name: {props.firstname}</p>
      <p>Last Name: {props.lastname}</p>
      <p>email: {props.email}</p>
      <p>Occupation: {props.occupation}</p>
      <p>City: {props.city}</p>
      <p>Bio: {props.bio}</p>

      <button type="submit" onClick={props.subtractPage}>Back</button>
      <button type="submit" onClick={props.addPage}>Confirm AND(to fix) Continue</button>
    </div>
  );
}

export default P3;



