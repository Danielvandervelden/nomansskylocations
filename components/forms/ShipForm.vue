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
					this.$store.dispatch('newpost/new-post/uploadFile', this.filled.image);
				}
			},submitPost() {
				if(this.filled.image === null) {
					document.getElementById('ship_image_upload').scrollIntoView({behavior: 'smooth', block: 'center'});
					this.createMessage("Please upload an image before submiting", document.getElementById('ship_image_upload'));
				} else if(this.filled.galaxy === null) {
					document.getElementById('galaxy_select').scrollIntoView({behavior: 'smooth', block: 'center'});
					this.createMessage("Please select a galaxy before submiting", document.getElementById('galaxy_select'));
				} else if(this.filled.type == null) {
					document.getElementById('ship_type').scrollIntoView({behavior: 'smooth', block: 'center'});
					this.createMessage("Please select a multitool type before submiting", document.getElementById('ship_type'));
				} else if(this.filled.glyphs == null) {
					document.getElementById('glyph-selector').scrollIntoView({behavior: 'smooth', block: 'center'});
					this.createMessage("Please enter the portal glyphs before submiting", document.getElementById('glyph-selector'));
				} else {
					document.querySelector('body').classList.add('loading');
					this.$store.dispatch('newpost/new-post/submitNewPost', this.filled);
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>