import { db, storage } from "@/plugins/database/firebase.js";

export const state = () => ({
	postData: null
})

export const getters = {
	getPostData: state => {
		return state.postData
	}
}

export const mutations = {
	setPostData(state, postData) {
		state.postData = postData;
	}
}

export const actions = {
	async fetchPostData({commit, dispatch}, {category, type, id}) {
		let response = db.collection(`posts/${category}/${type}/`).doc(`${id}`).get()
		.then(snapshot => {
			commit('setPostData', snapshot.data())
		})
	}
}