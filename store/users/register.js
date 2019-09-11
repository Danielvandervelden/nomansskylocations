import { auth, db } from "@/plugins/database/firebase.js";

/*
/* State module for registration
/*_______________________________________________________*/

export const mutations = {
	registerFail(state, data) {
		this._vm.loading(false);
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

		auth.createUserWithEmailAndPassword(userData.email, userData.password)
		.then(res => {
			db.collection('users').doc(res.user.uid).set({
				display_name: userData.display_name,
				email: userData.email,
				user_id: res.user.uid,
				posts: [],
				admin: false
			})

			dispatch('sendEmailVerification');
		})
		.catch(e => {
			switch(e.code) {
				case "auth/email-already-in-use":
					commit("registerFail", {el: ".email", message: e.message});
					break;
				case "auth/weak-password":
					commit("registerFail", {el: ".password", message: e.message});
					break;
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
	},

	async sendEmailVerification({commit}) {
		auth.currentUser.sendEmailVerification()
		.then(e => {
			commit("registerSuccess")
		})
		.catch(e =>  {
			console.log(e);
		})
	}
}