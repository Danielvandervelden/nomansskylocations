<template>
	<form class="nms__form-multitool">
		<nms-upload name="multitool_image_upload" @change.native="fileSelected($event)"></nms-upload>
		<galaxy-select search="true" label="Select a galaxy" name="galaxy_select" v-model="filled.galaxy"></galaxy-select>
		<nms-select v-model="filled.type" name="multitool_type" label="What type of Multitool?" :options="type"></nms-select>
		<nms-select v-model="filled.rank" name="multitool_class" label="What class?" :options="rank"></nms-select>
		<nms-select v-model="filled.slots" name="multitool_slots" label="How many slots?" :options="slots"></nms-select>
		<nms-input v-model="filled.description" kind="textarea" label="Enter a description for finding it"></nms-input>
		<glyph-selector v-model="filled.glyphs" label="Enter the portal glyph combination"></glyph-selector>
		<span id="nms__form-multitool--location">Where is the multitool located?</span>
		<nms-radio v-model="filled.location" radiovalue="station" name="location">Space Station</nms-radio>
		<nms-radio v-model="filled.location" radiovalue="planet" name="location">Planet</nms-radio>
		<div v-if="filled.location === 'planet'" class="nms__form-multitool--planet-details">
			<nms-input v-model="filled.planet" label="Planet Name" name="planet" kind="text"></nms-input>
			<nms-input v-model="filled.coords" label="Galactic Coordinates" name="coords" kind="text"></nms-input>
		</div>

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
				type: ['Alien', 'Experimental', 'Rifle', 'Pistol'],
				rank: ['C', 'B', 'A', 'S'],
				slots: Array.apply(null, {length: 25}).map(Number.call, Number),
				
				filled: {
					postType: 'multitools',
					type: null,
					rank: null,
					slots: null,
					galaxy: null,
					glyphs: null,
					location: null,
					planet: null,
					coords: null,
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
			},
			submitPost() {
				if(this.filled.image === null) {
					document.getElementById('multitool_image_upload').scrollIntoView({behavior: 'smooth', block: 'center'});
					this.createMessage("Please upload an image before submiting", document.getElementById('multitool_image_upload'));
				} else if(this.filled.galaxy === null) {
					document.getElementById('galaxy_select').scrollIntoView({behavior: 'smooth', block: 'center'});
					this.createMessage("Please select a galaxy before submiting", document.getElementById('galaxy_select'));
				} else if(this.filled.type == null) {
					document.getElementById('multitool_type').scrollIntoView({behavior: 'smooth', block: 'center'});
					this.createMessage("Please select a multitool type before submiting", document.getElementById('multitool_type'));
				} else if(this.filled.rank == null) {
					document.getElementById('multitool_class').scrollIntoView({behavior: 'smooth', block: 'center'});
					this.createMessage("Please select a multitool class before submiting", document.getElementById('multitool_class'));
				} else if(this.filled.slots == null) {
					document.getElementById('multitool_slots').scrollIntoView({behavior: 'smooth', block: 'center'});
					this.createMessage("Please select the multitool slots before submiting", document.getElementById('multitool_slots'));
				} else if(this.filled.glyphs == null) {
					document.getElementById('glyph-selector').scrollIntoView({behavior: 'smooth', block: 'center'});
					this.createMessage("Please enter the portal glyphs before submiting", document.getElementById('glyph-selector'));
				} else if(this.filled.location == null) {
					document.getElementById('nms__form-multitool--location').scrollIntoView({behavior: 'smooth', block: 'center'});
					this.createMessage("Please select a location before submiting", document.getElementById('nms__form-multitool--location'));
				} else if(this.filled.location == 'planet' && this.filled.planet === null) {
					document.getElementById('planet').scrollIntoView({behavior: 'smooth', block: 'center'});
					this.createMessage("Please enter the planet's name before submiting", document.getElementById('planet'));
				} else if(this.filled.location == 'planet' && this.filled.coords === null) {
					document.getElementById('coords').scrollIntoView({behavior: 'smooth', block: 'center'});
					this.createMessage("Please enter the multitool's Galactic Coordinates before submiting", document.getElementById('coords'));
				} else {
					document.querySelector('body').classList.add('loading');
					this.filled.id = +new Date() * Math.random(); 
					this.$store.dispatch('newpost/new-post/submitNewPost', this.filled);
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	.nms__form-multitool {
		padding-bottom: 2rem;

		&--submit {
			margin-top: 2rem;
		}

		&--location {
			display: block;
			position: relative;
		}
	}
</style>