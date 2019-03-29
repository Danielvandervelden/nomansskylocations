<template>
	<form class="nms__form-multitool">
		<nms-select label="What type of Multitool?" :options="type"></nms-select>
		<nms-select label="What class?" :options="rank"></nms-select>
		<nms-select label="How many slots?" :options="slots"></nms-select>		
	</form>
</template>

<script>
	export default {
		data() {
			return {
				type: ['Alien', 'Experimental', 'Rifle', 'Pistol'],
				rank: ['C+', 'B+', 'A+', 'S'],
				slots: Array.apply(null, {length: 25}).map(Number.call, Number),
				
				filled: {
					type: '',
					rank: '',
					slots: '',
					galaxy: '',
					glyphs: '',
					location: ''
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>