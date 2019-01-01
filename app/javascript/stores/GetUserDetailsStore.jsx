import AppDispatcher from "../dispatcher.jsx";
import ActionTypes from "../constants.jsx";

AppDispatcher.register(action => {
	console.log(4, "At the Stores");
	switch(action.actionType) {
		case ActionTypes.RECEIVED_GET_USER_DETAILS:

		break;
		default:
	}
});