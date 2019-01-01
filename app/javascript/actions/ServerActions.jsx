import AppDispatcher from "../dispatcher.jsx";
import ActionTypes from "../constants.jsx";

export default {

receivedUserDetails(userDetails) {
		//AppDispatcher...
		console.log(3, "At the server actions");
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_GET_USER_DETAILS,
			userDetails: userDetails
		})
	}
}