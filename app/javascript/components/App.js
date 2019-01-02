import React from "react";
import ReactDOM from 'react-dom';
import Form from './Form.js';
import UserList from './UserList.js';
import GetUserDetailsStore from "../stores/GetUserDetailsStore.jsx";

let getAppState = () => {  
  return { userDetails: GetUserDetailsStore.getAll() };
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
	

	// addUserDetails = (userDetailsFromResponse) => {
	// 	this.setState({userDetails: this.state.userDetails.concat(userDetailsFromResponse)})
	// }

  componentDidMount() {    
    GetUserDetailsStore.addChangeListener(this._onChange);
  }

  componentWillUnMount() {
    GetUserDetailsStore.removeChangeListener(this._onChange);
  }

  _onChange() {   
    //console.log("On change called" + Object.keys(GetUserDetailsStore.getAll()));
    console.log("This is the value for state user details " + Object.keys(getAppState())); 
    this.setState(getAppState());
  }

  render () {
    return (
      <div>       
        <Form />
        <UserList allDetails= {this.state.userDetails} />
      </div>
    );
  }
}


export default App;