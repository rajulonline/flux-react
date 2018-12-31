import React from "react";
import ReactDOM from 'react-dom';
import Form from './Form.js';
import UserList from './UserList.js';

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