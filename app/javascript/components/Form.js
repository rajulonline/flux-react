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
		// event.preventDefault();
		// axios.get('/getUserDetails', {params: {userName: this.state.userName}})
		// .then(response=>{this.props.onSubmit(response.data)})
		// .catch(error=>error);
		GitRetrieveDetailsActions.getAllUserDetails(this.state.userName);
	}
	 

  render () {
    return (      
        <form onSubmit={this.handleSubmit}>
        	<input type="text" placeholder="Enter the username" name="user[name]" value={this.state.userName} onChange={this.handleChange} />
        	<input type="submit" value="Submit" />
        </form>
    );
  }
}


export default Form;