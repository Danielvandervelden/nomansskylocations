/*
/* State module for logging in
/*_______________________________________________________*/


export const state = () => ({
	token: null,
	display_name: null
})

export const getters = {
	isLoggedIn: state => {
		return state.token;
	},
	getDisplayName: state => {
		return state.display_name;
	}
}

export const mutations = {
	loginUser(state, user) {
		if(user.idToken) {
			state.token = user.idToken;
		} else if(user.id_token) {
			state.token = user.id_token;
		}

		state.display_name = user.displayName;

		console.log(state);

		let expiresSeconds =  user.expiresIn;
		let cookie = {
			display_name: user.displayName,
			token: user.idToken,
			refresh: user.refreshToken
		}

		if(this.$cookies.get('user') == undefined) {
			this.$cookies.set('user', cookie, {path: '/', maxAge: expiresSeconds})
		}

		this.$router.push('/');
	},
}

export const actions = {
	loginUser(context, user) {
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
			if(user.localId) {
				user_to_login.displayName = res.data[user.localId].display_name;
				context.commit('loginUser', user_to_login);
			} else if(user.user_id) {
				user_to_login.displayName = res.data[user.user_id].display_name;
				context.commit('loginUser', user_to_login);
			} else {
				console.log("something went wrong, there is not localId or user_id on the object.")
			}
		})
		.catch(error => console.log(error, error.reponse))
	},
}