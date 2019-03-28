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
	
}

export const actions = {
	
}