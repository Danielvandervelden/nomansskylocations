import { db, storage } from "@/plugins/database/firebase.js";

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
			let uploadDivSpan = [...document.querySelectorAll('span.label')].filter(span => { return span.innerText == image.name })
			uploadDivSpan[0].innerText = 'Upload successful!';
		})

		.catch(e => {
			let uploadDivSpan = [...document.querySelectorAll('span.label')].filter(span => { return span.innerText == image.name })
			this._vm.createMessage("Something went wrong...", uploadDivSpan[0].closest('.nms-upload'))
		})

		this._vm.loading(false);
	},

	async submitNewPost({commit, dispatch}, post) {
		// If a user is logged in..
		if (this.$cookies.get('user') !== undefined) {
			post.image_url = await storage.ref(`uploads/${post.image.id}`).getDownloadURL().then(url => url);
			post.user_id = this.$cookies.get('user').user_id;
			post.display_name = this.$cookies.get('user').display_name;
			post.post_date = new Date();
			post.id = this._vm.generateID();
			delete post.image;
			
			await db.collection(`posts/${post.post_type}/${post.type}`).doc(post.id.toString()).set({
				post
			})
			.then(res => {
				dispatch('addPostToUser', post);
				commit('postSuccessful');
			})
			.catch(e => {
				console.log(e);
			})

		} else {
			// otherwise redirect him/her to login
			this.$router.push('/login');
		}
		// disable loading status
		this._vm.loading(false);
	},

	addPostToUser({commit, dispatch}, post) {
		let ref = db.collection('users').doc(post.user_id);
		
		ref.get().then(doc => {
			let postsArray = [...doc.data().posts];
			postsArray.push(post);
			ref.update({
				posts: postsArray	
			})
		})
	
	}
}