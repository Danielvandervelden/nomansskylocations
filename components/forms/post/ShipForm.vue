<template>
	<form>
		<nms-upload name="ship_image_upload" @change.native="fileSelected($event)"></nms-upload>
		<galaxy-select search="true" label="Select a galaxy" name="galaxy_select" v-model="filled.galaxy"></galaxy-select>
		<nms-select v-model="filled.type" name="ship_type" label="What type of ship is it??" :options="type"></nms-select>
		<nms-input v-model="filled.description" kind="textarea" label="Enter a description for finding it"></nms-input>
		<glyph-selector v-model="filled.glyphs" label="Enter the portal glyph combination"></glyph-selector>
		<nms-button @click.native="submitPost" class="nms__form-multitool--submit" color="green">Submit post</nms-button>
	</form>
</template>

<script>
	import GlyphSelector from '@/components/custom/GlyphSelector.vue';
	import GalaxySelect from '@/components/UI/Selects/GalaxySelect.vue';
	export default {
		components: {
			'glyph-selector': GlyphSelector,
			'galaxy-select': GalaxySelect
		},
		data() {
			return {
				
				type: ['Exotic', 'Fighter', 'Explorer', 'Hauler', 'Shuttle'],
				filled: {
					postType: 'ships',
					type: null,
					galaxy: null,
					glyphs: null,
					description: null,
					image: null,
				}
			}
		},
		methods: {
			fileSelected(e) {
				if(e.target.files[0].size < 1000000) {
					this.filled.image = e.target.files[0];
					this.filled.image.id = +new Date() + this.filled.image.name.replace(/\s/g,'-');
				}
			},
			uploadFile() {
				if(this.filled.image !== '') {
					document.querySelector('body').classList.add('loading');
					this.$store.dispatch('post/new-post/uploadFile', this.filled.image);
				}
			},submitPost() {
				if(
					this.evaluateInput(this.filled.image === null, "ship_image_upload", "Please upload an image before submitting") &&
					this.evaluateInput(this.filled.galaxy === null, "galaxy_select", "Please select a galaxy") &&
					this.evaluateInput(this.filled.type === null, "ship_type", "Please select a ship type") &&
					this.evaluateInput(this.filled.glyphs === null, "glyph__selector", "Please enter the portal glyphs")
				) {
					this.loading(true);
					this.$store.dispatch('post/new-post/submitNewPost', this.filled);
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>