<template>
	<form class="nms__form-multitool">
		<galaxy-select v-model="filled.galaxy"></galaxy-select>
		<nms-select v-model="filled.type" name="multitool_type" label="What type of Multitool?" :options="type"></nms-select>
		<nms-select v-model="filled.rank" name="multitool_class" label="What class?" :options="rank"></nms-select>
		<nms-select v-model="filled.slots" name="multitool_slots" label="How many slots?" :options="slots"></nms-select>
		<nms-input v-model="filled.description" kind="textarea" label="Enter a description for finding it"></nms-input>
		<glyph-selector v-model="filled.glyphs" label="Please enter the portal glyph combination"></glyph-selector>
		<span>Where is the multitool located?</span>
		<nms-radio v-model="filled.location" radiovalue="station" name="location">Space Station</nms-radio>
		<nms-radio v-model="filled.location" radiovalue="planet" name="location">Planet</nms-radio>
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
					description: ''
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>