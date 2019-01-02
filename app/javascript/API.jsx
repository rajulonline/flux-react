import ServerActions from "actions/ServerActions.jsx";
import axios from 'axios';

export default {
	
	getAllUserDetails(userName) {
		console.log(userName, "At the api jsx")
		axios.get('/getUserDetails', {params: {userName: userName}})
		.then(userDetails => ServerActions.receivedUserDetails(userDetails.data))
		.catch(error=>error);
	}
}