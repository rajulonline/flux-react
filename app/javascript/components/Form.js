import React from 'react';
import ReactDOM from 'react-dom';
import GitRetrieveDetailsActions from "../actions/GitRetrieveDetailsActions.jsx";


class Form extends React.Component {
	state = {
		userName: ''
	}

	handleChange = (event) => {
			this.setState({userName: event.target.value});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		// axios.get('/getUserDetails', {params: {userName: this.state.userName}})
		// .then(response=>{this.props.onSubmit(response.data)})
		// .catch(error=>error);
		GitRetrieveDetailsActions.getAllUserDetails(this.state.userName);
	}
	 

  render () {
    return (      
        <form onSubmit={this.handleSubmit}>
        	<input type="text" placeholder="Enter the username" name="user[name]" value={this.state.userName} onChange={this.handleChange} />
<<<<<<< HEAD
        	<input type="submit" className="waves-effect waves-light btn" value="Submit" />
=======
        	<input type="submit" value="Submit" />
>>>>>>> 26b013e6f66171190879cf730c2b688d494fd929
        </form>
    );
  }
}


export default Form;