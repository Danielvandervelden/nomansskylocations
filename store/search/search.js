import { db, storage } from '@/plugins/database/firebase';

export const state = () => ({
	searchResults: {
		title: null,
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
		state.searchResults.title = `Search results for: ${searchData.type} ${searchData.search_type} in ${searchData.galaxy}`;
		this.$router.push('/search/results');
	}
}

export const actions = {
	async submitSearch({dispatch, commit}, searchData) {
		let postArray = [];
		await db.collection(`posts/${searchData.search_type}/${searchData.type}`).get()
		.then(snapshot => {
			snapshot.docs.filter(doc => {
				// if the search type is multitools we want to check for different things
				if(doc.data().post.post_type == "multitools") {
					if(
						doc.data().post.galaxy == searchData.galaxy &&
						doc.data().post.type == searchData.type && // The type needs to always be filled in
						searchData.slots !== null ? doc.data().post.slots == searchData.slots : true && // Slots don't necessarily need to be filled in, if it's empty simply return true, otherwise compare it with what was searched for.
						searchData.rank !== null ? doc.data().post.rank == searchData.rank : true // Class doesn't necessarily need to be filled in, if it's empty simply return true, otherwise compare it with what was searched for.
					) {
						postArray.push(doc.data().post);
					}
				} 
				// if the search type is ships we want to check for different things
				else if(doc.data().post.post_type == "ships") {
					if(
						doc.data().post.galaxy == searchData.galaxy &&
						doc.data().post.type == searchData.type
					) {
						postArray.push(doc.data().post);
					}
				}
				// if the search type is planets we want to check for different things
				else if(doc.data().post.post_type == "planets") {
					if(
						doc.data().post.galaxy == searchData.galaxy &&
						doc.data().post.type == searchData.type &&
						searchData.weather !== null ? doc.data().post.weather == searchData.weather : true && // Weather doesn't necessarily need to be filled in, if it's empty simply return true, otherwise compare it with what was searched for.
						searchData.sentinels !== null ? doc.data().post.sentinels == searchData.sentinels : true // Sentinels don't necessarily need to be filled in, if it's empty simply return true, otherwise compare it with what was searched for.
					) {
						postArray.push(doc.data().post);
					}
				}
			})
			commit('setSearchState', {postData: postArray, searchData: searchData});
		})
	}
}