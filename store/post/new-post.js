import { db, storage } from "@/plugins/database/firebase.js";

export const state = () => ({
	glyphs: [
		{glyph: '0'},
		{glyph: '1'},
		{glyph: '2'},
		{glyph: '3'},
		{glyph: '4'},
		{glyph: '5'},
		{glyph: '6'},
		{glyph: '7'},
		{glyph: '8'},
		{glyph: '9'},
		{glyph: 'A'},
		{glyph: 'B'},
		{glyph: 'C'},
		{glyph: 'D'},
		{glyph: 'E'},
		{glyph: 'F'},
	]
})

export const getters = {
	getGlyphs: state => {
		return state.glyphs;
	}
}

export const mutations = {
	postSuccessful(state, payload) {
		this.$router.push('/');
	}
}

export const actions = {
	async uploadFile({commit}, image) {
		const ref = storage.ref("uploads");
		const fileName = image.id;
		const metaData = { contentType: image.type };

		const upload = await ref.child(fileName).put(image, metaData)
		.then(res => {
			this._vm.loading(false);
			let uploadDivSpan = [...document.querySelectorAll('span.label')].filter(span => { return span.innerText == image.name })
			uploadDivSpan[0].innerText = 'Upload successful!';
		})

		.catch(e => {
			this._vm.loading(false);
			let uploadDivSpan = [...document.querySelectorAll('span.label')].filter(span => { return span.innerText == image.name })
			this._vm.createMessage("Something went wrong...", uploadDivSpan[0].closest('.nms-upload'))
		})
	},

	async submitNewPost({commit, dispatch}, post) {
		if (this.$cookies.get('user') !== undefined) {
			let imageURL = await storage.ref(`uploads/${post.image.id}`).getDownloadURL().then(url => url);
			let user_id = this.$cookies.get('user').user_id;
			let display_name = this.$cookies.get('user').display_name;
			let post_date = new Date();
			let id = this._vm.generateID();
			if(post.postType === "multitools") {
				let response = await db.collection(`posts/${post.postType}/${post.type}`).doc(id.toString()).set({
					id: id,
					type: post.type,
					slots: post.slots,
					class: post.rank,
					galaxy: post.galaxy,
					glyphs: post.glyphs,
					image_url: imageURL,
					location: post.location,
					planet: post.planet,
					coords: post.coords,
					description: post.description,
					user_id: user_id,
					display_name: display_name,
					post_date: post_date,
					post_type: post.postType
				});
			} else if(post.postType === "planets") {
				let response = await db.collection(`posts/${post.postType}/${post.type}`).doc(id.toString()).set({
					id: id,
					type: post.type,
					galaxy: post.galaxy,
					glyphs: post.glyphs,
					image_url: imageURL,
					planet: post.planet,
					weather: post.weather,
					flora: post.flora,
					fauna: post.fauna,
					description: post.description,
					user_id: user_id,
					display_name: display_name,
					post_date: post_date,
					post_type: post.postType
				});
			} else if(post.postType === "ships") {
				let response = await db.collection(`posts/${post.postType}/${post.type}`).doc(id.toString()).set({
					id: id,
					type: post.type,
					galaxy: post.galaxy,
					glyphs: post.glyphs,
					image_url: imageURL,
					user_id: user_id,
					display_name: display_name,
					post_date: post_date,
					post_type: post.postType
				});
			}

			dispatch('addPostToUser', {post_id: id, user_id: user_id});
			commit('postSuccessful');
		} else {
			this.$router.push('/login');
		}
		this._vm.loading(false);
	},

	addPostToUser({commit, dispatch}, payload) {
		let ref = db.collection('users').doc(payload.user_id);
		let postsArray = []
		ref.get().then(doc => {
			if(doc.exists) { postsArray = [...doc.data().posts] }

			postsArray.push(payload.post_id);
			ref.update({
				posts: postsArray
			})
		})
	
	}
}