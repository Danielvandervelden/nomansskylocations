/*
/* State module for registration
/*_______________________________________________________*/


export const state = () => ({
	
})

export const getters = {
	
}

export const mutations = {
	registerUser(state) {
		console.log("HELLO");
		this.$router.push('/login');
	},

	registerError(state, error) {
		if(error.response.request.response.includes('EMAIL_EXISTS')) {
			[...document.querySelectorAll('.email')].forEach(el => {
				this._vm.createMessage("An account with this email already exists", el)
			})
		}
	}
}

export const actions = {
	registerUser(context, user) {
		this.$axios.$post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAN9bbnQNSrEwke_9xycqPx5j-9L-9gCoI', {
			email: user.email,
			password: user.password,
			returnSecureToken: true
		})
		.then(res => {
			context.commit('registerUser');
			context.dispatch('storeUserInDatabase', [{user: user, res: res}]);
		})
		.catch(error => {
			context.commit('registerError', error);
		})
	},

	storeUserInDatabase(context, [{user, res}]) {
		console.log(user, res);
		this.$axios.$put('users.json', {
			[res.localId]: {
				email: res.email,
				display_name: user.displayName
			}
		})
		.then(res => {
			console.log(res);
		})
		.catch(error => {
			console.log(error.response);
		})
	}
}