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
			let createMessage = ($message, $elementToAppendTo) => {
				let self = this;
				let wrapper = document.createElement('div');
				wrapper.classList.add('nms-message');
				wrapper.style.transition = 'all .3s ease-in-out';
		  
				let message = document.createTextNode($message);
		  
				wrapper.appendChild(message);
		  
				fadeIn(wrapper);
				$elementToAppendTo.appendChild(wrapper);
				setTimeout(() => {fadeOut(wrapper)}, 5000);
			  }
		  
			  // FADE IN AN ELEMENT
			  let fadeIn = ($el) => {	
				  $el.classList.add('fade-in');
			  }
		  
			  // FADEOUT AN ELEMENT
			  let fadeOut =($el) => {	
				  $el.classList.add('fade-out');
				  $el.classList.remove('fade-in');
				  setTimeout(() => {$el.parentNode.removeChild($el)}, 1000);
			  }

			createMessage("An account with this email already exists", document.querySelector('.email'))
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