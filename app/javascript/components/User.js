import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class User extends React.Component {
	render(){
		return(
			<div>
				<h4>UserName: {this.props.name}</h4>
				<h4>Total Number of Public Repos: {this.props.public_repos}</h4>
				<h4>Total Number of Public Gists: {this.props.public_gists}</h4><br/>
			</div>
			)
	}
}

User.propTypes = {    
    name : PropTypes.string.isRequired,
    public_repos : PropTypes.number,
    public_gists : PropTypes.number,
}

export default User;