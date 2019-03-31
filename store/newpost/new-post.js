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

}

export const actions = {
	async uploadFile({commit}, image) {
		const ref = storage.ref("uploads");
		const fileName = image.id;
		const metaData = { contentType: image.type };

		const upload = await ref.child(fileName).put(image, metaData)
		.then(res => {
			document.querySelector('body').classList.remove('loading');
			let uploadDivSpan = [...document.querySelectorAll('span.label')].filter(span => { return span.innerText == image.name })
			uploadDivSpan[0].innerText = 'Upload successful!';
		})

		.catch(e => {
			let uploadDivSpan = [...document.querySelectorAll('span.label')].filter(span => { return span.innerText == image.name })
			this._vm.createMessage("Something went wrong...", uploadDivSpan[0].closest('.nms-upload'))
		})
	},

	async submitNewPost({context}, post) {
		if (this.$cookies.get('user') !== undefined) {
			let user_id = this.$cookies.get('user').user_id;
			let response = await db.collection('posts/' + post.postType + '/contents/').doc(post.id.toString()).set({
				id: post.id,
				type: post.type,
				slots: post.slots,
				class: post.rank,
				galaxy: post.galaxy,
				glyphs: post.glyphs,
				image_id: post.image.id,
				location: post.location,
				planet: post.planet,
				coords: post.coords,
				description: post.description,
				user: user_id
			});
		} else {
			this.$router.push('/login');
		}
		document.querySelector('body').classList.remove('loading');
	}
}