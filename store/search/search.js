import { db, storage } from '@/plugins/database/firebase';

export const state = () => ({
	searchQuery: null
})

export const getters = {
	
}

export const mutations = {
	
}

export const actions = {
	async submitSearch({dispatch, commit}, searchData) {
		if(searchData.searchType == "multitools") {
			let snapshot = await db.collection('posts/multitools/' + searchData.type).get()
			console.log(snapshot.docs.map(doc => doc.data()));
		} else if(searchData.searchType == "ships") {

		} else if(searchData.searchType == "planets") {
			
		}
	}
}