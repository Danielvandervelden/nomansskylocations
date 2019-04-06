import {db} from '@/plugins/database/firebase.js';

/*
/* State for a single user page (/user/id)
/*_______________________________________________________*/

export const state = () => ({
	userData: null,
	userPosts: []
})

export const getters = {
	getUserData: state => {
		return state.userData;
	},
	getMultitoolPosts: state => {
		let posts = [];
		state.userPosts.filter(post => {
			if(post[Object.keys(post)].post_type == 'multitools') {
				posts.push(post);
			}
		})

		return posts;
	},
	getShipPosts: state => {
		let posts = [];
		state.userPosts.filter(post => {
			if(post[Object.keys(post)].post_type == 'ships') {
				posts.push(post);
			}
		})

		return posts;
	},
	getPlanetPosts: state => {
		let posts = [];
		state.userPosts.filter(post => {
			if(post[Object.keys(post)].post_type == 'planets') {
				posts.push(post);
			}
		})

		return posts;
	}
}

export const mutations = {
	setUserState(state, userData) {
		state.userData = userData;
		state.userPosts = [];
		userData.posts.forEach(post => {
			state.userPosts.push(post);
		})
	}
}

export const actions = {
	async fetchUserData({commit, dispatch}, userid) {
		let user = await db.collection('users/').doc(`${userid}`).get()
		.then(res => {
			commit('setUserState', res.data());
		})
	}
}