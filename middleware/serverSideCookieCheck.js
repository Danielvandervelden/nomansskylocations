export default (context) => {

	if(process.server) {
		let userCookie = context.app.$cookies.get('user');

		context.app.$axios.$post('https://securetoken.googleapis.com/v1/token?key=AIzaSyAN9bbnQNSrEwke_9xycqPx5j-9L-9gCoI', {
			grant_type: "refresh_token",
			refresh_token: userCookie.refresh
		})
		.then(res => {
			context.app.store.dispatch('login/fetchUserMeta', res);
		})
	}
}