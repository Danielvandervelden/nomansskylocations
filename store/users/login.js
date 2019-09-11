import { auth, db } from "@/plugins/database/firebase.js";

/*
/* State module for logging in
/*_______________________________________________________*/


export const state = () => ({
	user: {
		user_id: null,
		user_email: null,
		display_name: null,
		isAdmin: false
	}
})

export const getters = {
	isLoggedIn: state => {
		return state.user.display_name !== null ? true : false;
	},
	getUser: state => {
		return state.user;
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
		}, {maxAge: 3600, path: '/'})

		this.$router.push('/');
	},

	setLoginState(state, userData) {
		state.user.display_name = userData.display_name;
		state.user.user_id = userData.uid;
		state.user.user_email = userData.email;
		state.user.isAdmin = userData.isAdmin;

	},

	setLoginStateFromCookies(state, userData) {
		state.user.display_name = userData.display_name,
		state.user.user_email = userData.user_email,
		state.user.user_id = userData.user_id
	},

	redirectToLogin(state) {
		this._vm.loading(false);
		this.$router.push('/login');
	},

	logoutUser(state) {
		state.user.user_id = null;
		state.user.user_email = null;
		state.user.display_name = null;

		this.$cookies.removeAll();

		this._vm.loading(false);
		this.$router.push('/');
	}
}

export const actions = {
	async loginUser({dispatch, commit}, userData) {

		let response = await auth.signInWithEmailAndPassword(userData.email, userData.password);

		if(response.code) {
			if(response.message === "auth/wrong-password") {
				commit("loginFail", {el: ".login-input.password", message: "Password is incorrect"});
			}
			if(response.message === "auth/too-many-requests") {
				commit("loginFail", {el: ".login-input", message: "You've tried to login too many times. Try again later"});
			}
			if(response.message === "auth/user-not-found") {
				commit("loginFail", {el: ".login-input.email", message: "Email address not found"});
			}
		} else {
			dispatch("fetchUserMeta", response.user);	
		}
		
	},
	fetchUserMeta({commit}, userData) {
		db.collection('users').doc(userData.uid).get()
		.then(function(doc) {
			userData.display_name = doc.data().display_name;
			userData.posts = doc.data().posts;
			userData.isAdmin = doc.data().admin;
			commit('loginSetCookiesAndRedirect', userData);
			commit('setLoginState', userData);
		})
		.catch(e => {
			console.log(e);
		})
	},
	initAuth({commit}) {
		if(this.$cookies.get('user') && this.$cookies.get('tokens')) {
			commit('setLoginStateFromCookies', this.$cookies.get('user'));
		}
	},
	checkAuth({commit}) {
		if(!this.$cookies.get('user') || !this.$cookies.get('tokens')) {
			commit('redirectToLogin');
			commit('logoutUser');
		}
	}
}