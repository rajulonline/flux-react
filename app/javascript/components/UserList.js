import React from 'react';
import ReactDOM from 'react-dom';
import User from './User.js';

const UserList = (props) => {
	return(
		<div>
			{props.userDetails.map(user=><User {...user} key={user.id}/>)}
		</div>
		);
	}

export default UserList;
