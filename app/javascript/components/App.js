import React, {lazy, Suspense} from "react";
import ReactDOM from 'react-dom';

const Form = React.lazy(() => import('./Form.js'));
const UserList = React.lazy(() => import('./UserList.js'));

import GetUserDetailsStore from "../stores/GetUserDetailsStore.jsx";
import ErrorBoundaryComponent from "./ErrorBoundaryComponent.js";


let getAppState = () => {  
  return { userDetails: GetUserDetailsStore.getAll() };
}


class App extends React.Component {

  // constructor(props){
  //   super(props);

  state = getAppState();
  //_onChange = this._onChange.bind(this);
 
	// addUserDetails = (userDetailsFromResponse) => {
	// 	this.setState({userDetails: this.state.userDetails.concat(userDetailsFromResponse)})
	// }


  

  componentDidMount = () => {    
    console.log("component did mount called ");
    GetUserDetailsStore.addChangeListener(this._onChange);
  }


  componentWillUnmount = () => {
     console.log("component will un mount called ");
    GetUserDetailsStore.removeChangeListener(this._onChange);
  }


  _onChange = () => {  
  console.log("On change called");   
    this.setState(getAppState());
  }

  render () {
    return (

      <div>  
                <div>
        <p align="center">
          This is a simple form to retrieve user data from the unauthenticated endpoint from git.<br/>
          The retrieved data is not stored in the database but just fetched from the "stores" in flux to be displayed 
          in the view.
        </p>    
      </div>
        <ErrorBoundaryComponent>
          <Suspense fallback={<div>Loading...</div>}>
            <section>
              <Form /> 
              <UserList allDetails={this.state.userDetails} />     
            </section>
          </Suspense>        
        </ErrorBoundaryComponent>
      </div>
    );
  }
}

export default App;