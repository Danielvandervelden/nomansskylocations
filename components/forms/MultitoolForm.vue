<template>
	<form class="nms__form-multitool">
		<galaxy-select v-model="filled.galaxy"></galaxy-select>
		<nms-select v-model="filled.type" name="multitool_type" label="What type of Multitool?" :options="type"></nms-select>
		<nms-select v-model="filled.rank" name="multitool_class" label="What class?" :options="rank"></nms-select>
		<nms-select v-model="filled.slots" name="multitool_slots" label="How many slots?" :options="slots"></nms-select>
		<nms-input kind="textarea" label="Enter a description for finding it"></nms-input>
	</form>
</template>

<script>
	export default {
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