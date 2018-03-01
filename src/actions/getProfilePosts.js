import InstaApi from './../utils/InstaApi';

let getProfilePosts = () => {
	return (dispatch) => {
		fetch(InstaApi.getSelfPostsUrl())
		.then(res => res.json())
		.then(posts => {
			dispatch({type: 'GET_PROFILE_POSTS', posts});
		});
	}
}

export default getProfilePosts;