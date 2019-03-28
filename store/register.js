import {auth} from '@/plugins/database/firebase.js';

/*
/* State module for registration
/*_______________________________________________________*/


export const state = () => ({
	
})

export const getters = {
	
}

export const mutations = {
	registerFail(state, message) {
		[...document.querySelectorAll('.password')].forEach(el => {
			this._vm.createMessage(message, el);
		})
	}
}

export const actions = {
	registerUser({commit}, userData) {
		console.log(userData);
		if(userData.confirmedPassword !== userData.password) {
			commit("registerFail", "Your passwords do not match!");
			return
		}
		auth.createUserWithEmailAndPassword(userData.email, userData.password)
		.catch(e => {
			console.log(e);
			if(e.code === "auth/weak-password") {
				commit('registerFail', "Password needs to be at least 6 characters");
			}

			if(e.code === "auth/email-already-in-use") {
				commit("registerFail", "This email address is already in use");
			}
		})
	}
}