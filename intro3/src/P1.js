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
    </div>)
}

//DO Bootstrap!!!

// <div className="col-md-6 mb-4">
//   <div className="card indigo form-white">
//     <div className="card-body">
//       <h3 className="text-center white-text py-3"><i className="fa fa-user"></i> Enter User Details</h3>
//       <div className="md-form">
//         <i className="fa fa-envelope prefix white-text"></i>
//         <input type="text" id="defaultForm-email1" className="form-control" />
//         <label for="defaultForm-email1">Your email</label>
//       </div>
//       <div className="md-form">
//         <i className="fa fa-lock prefix white-text"></i>
//         <input type="password" id="defaultForm-pass1" className="form-control" />
//         <label for="defaultForm-pass1">Your password</label>
//       </div>
//       <div className="text-center">
//         <button className="btn btn-outline-white waves-effect waves-light">next</button>
//       </div>
//     </div>
//   </div>
// </div>
//   )
// }

export default P1;
