import React from 'react';

const P2 = (props) => {
  return (
    <div style={{ border: '2px solid blue' }}>
      <h1>Contact Details </h1>
      <form>
        <input name="ocupation" placeholder="occupation" value={props.occupation} onChange={props.handleChange} />
        <input name="city" placeholder="city" value={props.city} onChange={props.handleChange} />
        <input name="bio" placeholder="bio" value={props.bio} onChange={props.handleChange} />
        {/* use onCLick since onSubmit reloads the page */}
        <button type="submit" onClick={props.subtractPage}>Back</button>
        <button type="submit" onClick={props.addPage}>Continue</button>
      </form>
    </div>
  );
}

export default P2;


