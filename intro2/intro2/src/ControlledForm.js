import React from 'react';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			handle: '',
			avatarURL: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
		//console.log(this.props);
		this.props.addList(this.state);
	}
	//arrow functions automatically do the .bind(this)
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value //es7 concept : object interpolation 
		});
	};

	render() {
		return (
			<div style={{ border: '2px solid blue' }}>
				<h1>User Form </h1>
				<form onSubmit={this.handleSubmit}>
					<input name="name" value={this.state.name} onChange={this.handleChange} />
					<input name="handle" value={this.state.handle} onChange={this.handleChange} />
					<input name="avatarURL" value={this.state.avatarURL} onChange={this.handleChange} />
					<button type="submit">Submit</button>
				</form>
			</div>
		);

	}
}

export default User; 