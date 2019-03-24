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
				el.classList.add('input-error-email');
				setTimeout(() => {
					el.classList.remove('input-error-email');
				}, 7000)
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
		})
		.catch(error => {
			context.commit('registerError', error);
		})
	}
}