import React from "react";
import ReactDOM from 'react-dom';
import Form from './Form.js';
import UserList from './UserList.js';

import GetUserDetailsStore from "../stores/GetUserDetailsStore";
import ServerActions from "../actions/ServerActions.jsx";

import GitRetrieveDetailsActions from "../actions/GitRetrieveDetailsActions.jsx";
GitRetrieveDetailsActions.getAllUserDetails();

class App extends React.Component {

	state = {
		userDetails: []
	}

	addUserDetails = (userDetailsFromResponse) => {
		this.setState({userDetails: this.state.userDetails.concat(userDetailsFromResponse)})
	}

  render () {
    return (
      <div>       
        <Form onSubmit={this.addUserDetails}/>
        <UserList userDetails={this.state.userDetails}/>
      </div>
    );
  }
}


export default App;