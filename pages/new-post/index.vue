<template>
	<div class="nms__new-post">
		<div class="nms__new-post--container">
			<h1 class="nms__new-post--title">Create a new post</h1>
			<nms-select class="nms__new-post--search-select" v-model="selected" :options="options">What would you like to post?</nms-select>
			<galaxy-select v-if="selected !== null"></galaxy-select>
			<multitool-form v-if="selected == 'Multitools'"></multitool-form>
			<ship-form v-if="selected == 'Ships'"></ship-form>
			<planet-form v-if="selected == 'Planets'"></planet-form>
			<nms-button back="true">Back</nms-button>
		</div>
	</div>
</template>

<script>
	import PlanetForm from '@/components/forms/PlanetForm.vue';
	import MultitoolForm from '@/components/forms/MultitoolForm.vue';
	import ShipForm from '@/components/forms/ShipForm.vue';
	import GalaxySelect from '@/components/UI/Selects/GalaxySelect.vue';

	export default {
		components: {
			'planet-form': PlanetForm,
			'multitool-form': MultitoolForm,
			'ship-form': ShipForm,
			'galaxy-select': GalaxySelect
		},
		data() {
			return {
				options: ['Multitools', 'Ships', 'Planets'],
				selected: null,
				post: {
					
				},
			}
		},
		created() {
			this.$store.dispatch('users/login/checkIfLoggedIn');
		},
		layout: 'new-post'
	}
</script>
<style scoped lang='scss'>
	.nms__new-post {
		padding: 2rem 0;

		&--container {
			padding: 3rem;
			box-sizing: border-box;
			@include faded-bg();
		}

		&--title {
			text-align: center;
			padding: 0;
			margin-bottom: 1.5rem;
		}

		&--search-select {
			margin-bottom: 2rem;
		}
	}
</style>