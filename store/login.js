/*
/* State module for logging in
/*_______________________________________________________*/


export const state = () => ({
	token: null,
	display_name: ''
})

export const getters = {
	isLoggedIn: state => {
		return state.token;
	}
}

export const mutations = {
	loginUser(state, user) {
		state.token = user.idToken;
		state.display_name = user.displayName;
		let expiresDays = ((3600 / 60) / 60) / 24;

		if(this.$cookies.get('user') == undefined) {
			this._vm.setCookie('user', {
				display_name: user.displayName,
				token: user.idToken,
				refresh: user.refreshToken
			}, expiresDays)
		}
	},
}

export const actions = {
	loginUser(context, user) {
		console.log(user);
		this.$axios.$post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAN9bbnQNSrEwke_9xycqPx5j-9L-9gCoI', {
			email: user.email,
			password: user.password,
			returnSecureToken: true
		})
		.then(res => {
			context.dispatch('fetchUserMeta', res);
		})
		.catch(error => console.log(error.response))
	},

	fetchUserMeta(context, user) {
		let user_to_login = {...user}
		this.$axios.get('users.json')
		.then(res => {
			user_to_login.displayName = res.data[user.localId].display_name;
			context.commit('loginUser', user_to_login);
		})
		.catch(error => console.log(error, error.reponse))
	},

	checkLegitimateUser(context, user) {
		this.$axios.$post('https://securetoken.googleapis.com/v1/token?key=AIzaSyAN9bbnQNSrEwke_9xycqPx5j-9L-9gCoI', {
			grant_type: "refresh_token",
			refresh_token: user.refresh
		})
		.then(res => {
			let userToLogin = {};
			userToLogin.localId = res.user_id;
			context.dispatch('fetchUserMeta', userToLogin);
		})
		.catch(error => {
			console.log(error.response, error, 'fuck me');
		})
	}
}