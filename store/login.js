/*
/* State module for logging in
/*_______________________________________________________*/


export const state = () => ({
	token: null
})

export const getters = {
	isLoggedIn: state => {
		return state.token;
	}
}

export const mutations = {
	
}

export const actions = {
	
}