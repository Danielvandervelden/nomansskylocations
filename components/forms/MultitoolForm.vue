<template>
	<form class="nms__form-multitool">
		<nms-upload name="multitool_image_upload" @change.native="fileSelected($event)"></nms-upload>
		<galaxy-select v-model="filled.galaxy"></galaxy-select>
		<nms-select v-model="filled.type" name="multitool_type" label="What type of Multitool?" :options="type"></nms-select>
		<nms-select v-model="filled.rank" name="multitool_class" label="What class?" :options="rank"></nms-select>
		<nms-select v-model="filled.slots" name="multitool_slots" label="How many slots?" :options="slots"></nms-select>
		<nms-input v-model="filled.description" kind="textarea" label="Enter a description for finding it"></nms-input>
		<glyph-selector v-model="filled.glyphs" label="Enter the portal glyph combination"></glyph-selector>
		<span>Where is the multitool located?</span>
		<nms-radio v-model="filled.location" radiovalue="station" name="location">Space Station</nms-radio>
		<nms-radio v-model="filled.location" radiovalue="planet" name="location">Planet</nms-radio>
		<div v-if="filled.location === 'planet'" class="nms__form-multitool--planet-details">
			<nms-input v-model="filled.planet" label="Planet Name" name="planet" kind="text"></nms-input>
			<nms-input v-model="filled.coords" label="Galactic Coordinates" name="coords" kind="text"></nms-input>
		</div>

		<nms-button class="nms__form-multitool--submit" color="green">Submit post</nms-button>
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
					type: '',
					rank: '',
					slots: '',
					galaxy: '',
					glyphs: '',
					location: '',
					planet: '',
					coords: '',
					description: '',
					image: ''
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
	}
</style>