<template>
	<div>
		<div class="title-wrapper">
			<h1>NO MANS SKY LOCATIONS</h1>
		</div>
		<section class="content">
			<div class="content__wrapper">
				<h3>What are you searching for today?</h3>
				<nms-select v-model="selected" name="global_search" :options="search_options"></nms-select>
				<multitool-form v-if="selected == 'Multitools'"></multitool-form>
				<ship-form v-if="selected == 'Ships'"></ship-form>
				<planet-form v-if="selected == 'Planets'"></planet-form>
			</div>
		</section>
  </div>
</template>

<script>
	import MultitoolForm from '@/components/forms/search/MultitoolForm.vue';
	import PlanetForm from '@/components/forms/search/PlanetForm.vue';
	import ShipForm from '@/components/forms/search/ShipForm.vue';
	export default {
		components: {
			'multitool-form': MultitoolForm,
			'planet-form': PlanetForm,
			'ship-form': ShipForm
		},
		data() {
			return {
				selected: null,
				search_options: ["Multitools", "Ships", "Planets"],
			}
		}
	}
</script>
<style scoped lang='scss'>
	.title-wrapper {
		margin-bottom: 5rem;

		h1 {
			color: #FFF;
			font-size: 6rem;
			text-align: center;
		}
	}

	.content__wrapper {
		margin-bottom: 10rem;
	}
</style>