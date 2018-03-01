let InstaApi = (function() {
	let access_token = '53975349.07dcdea.a9adde816ba64e6e8fc95d5b9843e20e',
		self_url = 'https://api.instagram.com/v1/users/self/?access_token=',
		self_posts_url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=',
		following_url = 'https://api.instagram.com/v1/users/self/follows?access_token=',
		followers_url = 'https://api.instagram.com/v1/users/self/followed-by?access_token=';

		let getSelfUrl = function() {
			return `${self_url}${access_token}`;
		}

		let getSelfPostsUrl = function() {
			return `${self_posts_url}${access_token}`;
		}

		let getFollowers = function() {
			return `${followers_url}${access_token}`;
		}

		let getFollowing = function() {
			return `${following_url}${access_token}`;
		}

		return {
			getSelfUrl: getSelfUrl,
			getSelfPostsUrl: getSelfPostsUrl,
			getFollowers: getFollowers,
			getFollowing: getFollowing,
		}
})();

export default InstaApi;