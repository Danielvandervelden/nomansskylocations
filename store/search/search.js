import { db, storage } from '@/plugins/database/firebase';

export const state = () => ({
	searchResults: {
		title: '',
		results: []
	},
	postData: null

})

export const getters = {
	getResults: state => {
		return state.searchResults;
	},
}

export const mutations = {
	setSearchState(state, {postData, searchData}) {
		this._vm.loading(false);
		state.searchResults.results = postData;
		if(searchData.searchType === "multitools") {
			state.searchResults.title = `Search results for: ${searchData.rank} class ${searchData.type} multitool w/ ${searchData.slots} slots`;
		}
		this.$router.push('/search/results');
	}
}

export const actions = {
	async submitSearch({dispatch, commit}, searchData) {
		if(searchData.searchType == "multitools") {
			let snapshot = await db.collection('posts').get()
			.then(snapshot => {
				let postArray = [] 
				snapshot.forEach(doc => {
					if(
						doc.data().class == searchData.rank &&
						doc.data().galaxy == searchData.galaxy &&
						doc.data().slots == searchData.slots
					) {
						postArray.push(doc.data());
					}
				});

				commit('setSearchState', {postData: postArray, searchData: searchData});
			})

		} else if(searchData.searchType == "ships") {
			let snapshot = await db.collection('posts').get()
			.then(snapshot => {
				let postArray = [] 
				snapshot.forEach(doc => {
					if(
						doc.data().class == searchData.rank &&
						doc.data().galaxy == searchData.galaxy &&
						doc.data().slots == searchData.slots
					) {

						postArray.push(doc.data());
					}
				});

				commit('setSearchState', {postData: postArray, searchData: searchData});
			})

		} else if(searchData.searchType == "planets") {
			let snapshot = await db.collection('posts').get()
			.then(snapshot => {
				let postArray = [] 
				snapshot.forEach(doc => {
					if(
						doc.data().class == searchData.rank &&
						doc.data().galaxy == searchData.galaxy &&
						doc.data().slots == searchData.slots
					) {

						postArray.push(doc.data());
					}
				});

				commit('setSearchState', {data: postArray, searchData: searchData});
			})
		}
	}
}