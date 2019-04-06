<template>
	<div>
		<galaxy-select search="true" label="Select a galaxy" name="galaxy_select" v-model="filled.galaxy"></galaxy-select>
		<nms-select v-model="filled.type" name="ship_type" label="What type of ship are you looking for?" :options="type"></nms-select>
		<nms-button @click.native="submitSearch" color="green">Find Ships!</nms-button>
	</div>
</template>

<script>
	import GalaxySelect from '@/components/UI/Selects/GalaxySelect.vue';
	export default {
		components: {
			'galaxy-select': GalaxySelect
		},
		data() {
			return {
				type: ['Exotic', 'Fighter', 'Explorer', 'Hauler', 'Shuttle'],
				filled: {
					search_type: "ships",
					galaxy: null,
					type: null,
				}
			}
		},
		methods: {
			submitSearch() {
				if(
					this.evaluateInput(this.filled.galaxy === null, "galaxy_select", "Please select a galaxy") &&
					this.evaluateInput(this.filled.type === null, "ship_type", "Please fill in a multitool type")
				) {
					this.loading(true);
					this.$store.dispatch('search/search/submitSearch', this.filled);
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>