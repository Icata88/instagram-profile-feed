import InstaApi from './../utils/InstaApi';

let getProfileInfo = () => {
	return (dispatch) => {
		fetch(InstaApi.getSelfUrl())
		.then(res => res.json())
		.then(self_data => {
			dispatch({type: 'GET_PROFILE_INFO', self_data});
		});
	}
}

export default getProfileInfo;