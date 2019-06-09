import { auth, db } from "@/plugins/database/firebase.js";

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
	loginFail(state, data) {
		this._vm.loading(false);
		[...document.querySelectorAll(data.el)].forEach(el => {
			this._vm.createMessage(data.message, el);
		})
	},
	loginSetCookiesAndRedirect(state, userData) {
		this._vm.loading(false);
		this.$cookies.set('user', {
			display_name: userData.display_name,
			user_id: userData.uid,
			user_email: userData.email,
		}, {maxAge: 3600, path: '/'})

		this.$cookies.set('tokens', {
			refresh: userData.stsTokenManager.refreshToken,
			token: userData.stsTokenManager.accessToken
		}, {maxAge: 3600, path: '/'})

		this.$router.push('/');
	},

	setLoginState(state, userData) {
		state.display_name = userData.display_name;
		state.token = userData.stsTokenManager.accessToken;
	},

	redirectToLogin(state) {
		this._vm.loading(false);
		this.$router.push('/login');
	}
}

export const actions = {
	loginUser({dispatch, commit}, userData) {
		this.$axios.$post('/api/login/login-user', {
			email: userData.email,
			password: userData.password
		})
		.then(res => {
			dispatch("fetchUserMeta", res);
		})
		.catch(e => {
			if(e.response.data.message === "auth/wrong-password") {
				commit("loginFail", {el: ".login-input.password", message: "Password is incorrect"});
			}
			if(e.response.data.message === "auth/too-many-requests") {
				commit("loginFail", {el: ".login-input", message: "You've tried to login too many times. Try again later"});
			}
			if(e.response.data.message === "auth/user-not-found") {
				commit("loginFail", {el: ".login-input.email", message: "Email address not found"});
			}
		})
	},
	async fetchUserMeta({commit}, userData) {
		let userMeta = await db.collection('users').doc(userData.uid).get()
		.then(doc => {
			userData.display_name = doc.data().display_name;
			userData.posts = doc.data().posts;
			commit('loginSetCookiesAndRedirect', userData);
			commit('setLoginState', userData);
		})
		.catch(e => {
			console.log(e);
		})
	},
}