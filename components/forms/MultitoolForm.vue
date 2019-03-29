<template>
	<form class="nms__form-multitool">
		<nms-select :options="type"></nms-select>
		<nms-select :options="rank"></nms-select>
		<nms-select :options="slots"></nms-select>		
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
					galaxy: ''
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>