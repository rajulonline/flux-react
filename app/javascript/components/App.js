import React from "react";
import ReactDOM from 'react-dom';
import Form from './Form.js';
import UserList from './UserList.js';
import GetUserDetailsStore from "../stores/GetUserDetailsStore.jsx";

<<<<<<< HEAD

=======
>>>>>>> 26b013e6f66171190879cf730c2b688d494fd929
let getAppState = () => {  
  return { userDetails: GetUserDetailsStore.getAll() };
}

class App extends React.Component {
<<<<<<< HEAD
  // constructor(props){
  //   super(props);
  state = getAppState();
  //_onChange = this._onChange.bind(this);
  
=======
  constructor(props){
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
>>>>>>> 26b013e6f66171190879cf730c2b688d494fd929
  
  
	// addUserDetails = (userDetailsFromResponse) => {
	// 	this.setState({userDetails: this.state.userDetails.concat(userDetailsFromResponse)})
	// }

<<<<<<< HEAD
  componentDidMount = () => {    
=======
  componentDidMount() {    
>>>>>>> 26b013e6f66171190879cf730c2b688d494fd929
    console.log("component did mount called ");
    GetUserDetailsStore.addChangeListener(this._onChange);
  }

<<<<<<< HEAD
  componentWillUnmount = () => {
=======
  componentWillUnmount() {
>>>>>>> 26b013e6f66171190879cf730c2b688d494fd929
     console.log("component will un mount called ");
    GetUserDetailsStore.removeChangeListener(this._onChange);
  }

<<<<<<< HEAD
  _onChange = () => {  
=======
  _onChange() {  
>>>>>>> 26b013e6f66171190879cf730c2b688d494fd929
  console.log("On change called");   
    this.setState(getAppState());
  }

  render () {
    return (
<<<<<<< HEAD
      <div>  
                <div>
        <p align="center">
          This is a simple form to retrieve user data from the unauthenticated endpoint from git.<br/>
          The retrieved data is not stored in the database but just fetched from the "stores" in flux to be displayed 
          in the view.
        </p>    
      </div>
        <Form />      
        <UserList allDetails={this.state.userDetails}/>                  
=======
      <div>       
        <Form />
        <UserList allDetails= {this.state.userDetails} />
>>>>>>> 26b013e6f66171190879cf730c2b688d494fd929
      </div>
    );
  }
}


export default App;