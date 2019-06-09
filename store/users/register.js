import { db } from "@/plugins/database/firebase.js";

/*
/* State module for registration
/*_______________________________________________________*/

export const mutations = {
	registerFail(state, data) {
		[...document.querySelectorAll(data.el)].forEach(el => {
			this._vm.createMessage(data.message, el);
		})
		document.querySelector('body').classList.remove('loading');
	},
	registerSuccess() {
		document.querySelector('body').classList.remove('loading');
		this.$router.push('/login');
	}
}

export const actions = {
	async registerUser({commit, dispatch}, userData) {
		if(userData.confirmedPassword !== userData.password) {
			commit("registerFail", {el: ".password", message: "Your passwords do not match!"});
			return
		}

		let displayNameExists =  await dispatch('checkIfDisplayNameExists', userData);

		if(displayNameExists === true) {
			commit("registerFail", {el: ".display-name", message: "This name has already been taken!"});
			return
		}

		this.$axios.$post('/api/register/new-user', {
			display_name: userData.display_name,
			email: userData.email,
			password: userData.password
		})
		.then(res => {
			db.collection('users').doc(res.uid).set({
				display_name: userData.display_name,
				email: userData.email,
				user_id: res.uid,
				posts: []
			});

			commit("registerSuccess");
		})
		.catch(e => {
			this._vm.loading(false);

			if(e.response.data.message === "auth/weak-password") {
				commit("registerFail", {el: ".password", message: "Password needs to be at least 6 characters"});
			}

			if(e.response.data.message === "auth/email-already-in-use") {
				commit("registerFail", {el: ".email", message: "This email address is already in use"});
			}
		})
	},

	async checkIfDisplayNameExists(context, userData) {
		const users = db.collection("users");

		const snapshot = await users.get();
		const allDisplayNames = snapshot.docs.map(doc => doc.data().display_name);
		
		if(allDisplayNames.includes(userData.display_name)) {
			return true
		} else {
			return false
		}
	}
}