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

}

export const actions = {
	async fetchPostData({commit, dispatch}, postID) {
		let response = await db.collection('users').get()
		.then(snapshot => {
			console.log(snapshot);
		})
	}
}