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
			refresh: userData.refreshToken,
			token: userData.ra
		}, {maxAge: 3600, path: '/'})

		this.$router.push('/');
	},

	setLoginState(state, userData) {
		state.display_name = userData.display_name;
		state.token = userData.ra;
	},

	redirectToLogin(state) {
		this._vm.loading(false);
		this.$router.push('/login');
	}
}

export const actions = {
	loginUser({dispatch, commit}, userData) {
		this.$axios.$post('/login-user', userData)
		.then(res => {
			console.log('Client side');
		})
		// auth.signInWithEmailAndPassword(userData.email, userData.password)
		// .then(res => {
		// 	dispatch('fetchUserMeta', res.user);
		// })
		// .catch(e => {
		// 	if(e.code === "auth/wrong-password" || e.code === "auth/user-not-found") {
		// 		commit("loginFail", {el: ".login-input", message: "Either your username or password is incorrect!"})
		// 	}
		// })
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

	initAuth(context) { 
		let userData = {};

		let user = this.$cookies.get('user');
		let tokens = this.$cookies.get('tokens');
		if(user !== undefined && tokens !== undefined) {
			userData.display_name = user.display_name;
			userData.ra = user.token;
			context.commit('setLoginState', userData);
		}
	},

	checkIfLoggedIn({commit}) {
		let user = this.$cookies.get('user');
		let tokens = this.$cookies.get('tokens');
		if(user === undefined && tokens === undefined) {
			commit('redirectToLogin');
		}
	}
}