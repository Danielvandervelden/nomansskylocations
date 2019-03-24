/*
/* State module for portfolio
/*_______________________________________________________*/


export const state = () => ({
	loggedIn: true
})

export const getters = {
	isLoggedIn: state => {
		return state.loggedIn;
	}
}

export const mutations = {
	
}

export const actions = {
	
}