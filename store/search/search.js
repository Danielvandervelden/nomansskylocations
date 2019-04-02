export const state = () => ({
	searchQuery: null
})

export const getters = {
	
}

export const mutations = {
	
}

export const actions = {
	submitSearch({dispatch, commit}, searchData) {
		if(searchData.searchType == "multitools") {
			
		} else if(searchData.searchType == "ships") {

		} else if(searchData.searchType == "planets") {
			
		}
	}
}