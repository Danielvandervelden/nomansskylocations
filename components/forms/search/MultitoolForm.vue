<template>
	<form>
		<galaxy-select search="true" label="Select a galaxy" name="galaxy_select" v-model="filled.galaxy"></galaxy-select>
		<nms-select v-model="filled.type" name="multitool_type" label="What type of Multitool?" :options="type"></nms-select>
		<nms-select v-model="filled.rank" name="multitool_class" label="What class?" :options="rank"></nms-select>
		<nms-select v-model="filled.slots" name="multitool_slots" label="How many slots?" :options="slots"></nms-select>
		<nms-button @click.native="submitSearch" color="green">Find Multitools!</nms-button>
	</form>
</template>

<script>
	import GalaxySelect from '@/components/UI/Selects/GalaxySelect.vue';
	export default {
		components: {
			'galaxy-select': GalaxySelect
		},
		data() {
			return {
				type: ['Alien', 'Experimental', 'Rifle', 'Pistol'],
				rank: ['C', 'B', 'A', 'S'],
				slots: Array.apply(null, {length: 25}).map(Number.call, Number),

				filled: {
					searchType: "multitools",
					type: null,
					rank: null,
					slots: null,
					galaxy: null
				}
			}
		},
		methods: {
			submitSearch() {
				if(
					this.evaluateInput(this.filled.galaxy === null, "galaxy_select", "Please select a galaxy") &&
					this.evaluateInput(this.filled.type === null, "multitool_type", "Please fill in a multitool type") &&
					this.evaluateInput(this.filled.rank === null, "multitool_class", "Please fill in a multitool class") &&
					this.evaluateInput(this.filled.slots === null, "multitool_slots", "Please fill in the multitool slots")
				) {
					this.$store.dispatch('search/search/submitSearch', this.filled);
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>