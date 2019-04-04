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
	async fetchPostData({commit, dispatch}, {category, type, id}) {
		let response = db.collection(`posts/${category}/${type}/${id}`)
		.then(snapshot => {
			snapshot.forEach(doc => {
				console.log(doc);
			})
		})
	}
}