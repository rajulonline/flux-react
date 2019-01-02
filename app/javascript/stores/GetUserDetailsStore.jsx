import AppDispatcher from "../dispatcher.jsx";
import ActionTypes from "../constants.jsx";
import {EventEmitter} from "events";
const CHANGE_EVENT = "CHANGE";

let gitUserDetails = [];

class GitEventEmitter extends EventEmitter {
	getAll() {
		return gitUserDetails;
	}

	emitChange() {	
	console.log("Emit change called");	
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
}

let GetUserDetailsStore = new GitEventEmitter();

AppDispatcher.register(action => {
	
	switch(action.actionType) {
		case ActionTypes.RECEIVED_GET_USER_DETAILS:		
			gitUserDetails.push(action.userDetails);
			console.log(gitUserDetails, "At the Stores");			
			GetUserDetailsStore.emitChange();
		break;
		default:

	}
});

export default GetUserDetailsStore;