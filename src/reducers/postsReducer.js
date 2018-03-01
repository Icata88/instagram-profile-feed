let postsReducer = (state=[], action) => {
	switch(action.type) {
		case 'GET_PROFILE_POSTS':
			return {
				posts: action.posts
			};
		default:
			return state;
	}
}

export default postsReducer;