let profileReducer = (state=[], action) => {
	switch(action.type) {
		case 'GET_PROFILE_INFO':
			return {
				self_data: action.self_data
			};
		default:
			return state;
	}
}

export default profileReducer;
