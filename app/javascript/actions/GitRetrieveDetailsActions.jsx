import API from "../API.jsx";

export default {
	getAllUserDetails(userName) {
		console.log(userName,"Here you are at the actions");
		API.getAllUserDetails(userName);
	}
}