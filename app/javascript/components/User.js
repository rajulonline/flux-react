import React from 'react';
import ReactDOM from 'react-dom';


class User extends React.Component {
	render(){
		return(
			<div>
				<h1>{this.props.name}</h1>
			</div>
			)
	}
}

export default User;