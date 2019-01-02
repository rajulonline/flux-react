import React from 'react';
import ReactDOM from 'react-dom';
import User from './User.js';

class UserList extends React.Component {	
		render() {
		return(
			<div>
			{this.props.allDetails.map(user=><User {...user} key={user.id}/>)}
		</div>

			);
	}
}
	

export default UserList;
