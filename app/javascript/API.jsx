import ServerActions from "./actions/ServerActions.jsx";
import axios from 'axios';

export default {
	
	getAllUserDetails(userName) {
		console.log(2, "you are here at the api");
		axios.get('/getUserDetails', {params: {userName: userName}})
		.then(userDetails => ServerActions.receivedUserDetails(userDetails))
		.catch(error=>error);
	}
}