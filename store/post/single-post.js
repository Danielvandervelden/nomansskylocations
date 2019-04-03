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
	fetchPostData({commit, dispatch}, postID) {
		
	}
}