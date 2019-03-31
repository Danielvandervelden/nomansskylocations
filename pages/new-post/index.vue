<template>
	<div class="nms__new-post">
		<div class="nms__new-post--container">
			<h1 class="nms__new-post--title">Create a new post</h1>
			<nms-select name="category_select" class="nms__new-post--search-select" v-model="selected" :options="options">What would you like to post?</nms-select>
			<div :class="selected !== null ? 'dropdown-enabled' : ''" class="nms__new-post--form-wrapper">
				<div class="form">
					<multitool-form v-if="selected == 'Multitools'"></multitool-form>
					<ship-form v-if="selected == 'Ships'"></ship-form>
					<planet-form v-if="selected == 'Planets'"></planet-form>
				</div>
			</div>
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
			}
		},
		created() {
			this.$store.dispatch('users/login/checkIfLoggedIn');
		},
		mounted() {
			let observedDiv = document.querySelector('.nms__new-post--form-wrapper > .form');
			let maxHeightDiv = document.querySelector('.nms__new-post--form-wrapper');

			let config = {attributes: true, childList: true, subtree: true};

			let callback = (mutationsList, observer) => {
				let heightOfObservedDiv = observedDiv.offsetHeight;
				maxHeightDiv.style.maxHeight = heightOfObservedDiv + 'px';
			}

			let observer = new MutationObserver(callback);

			observer.observe(observedDiv, config);
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

		&--form-wrapper {
			max-height: 0;
			transition: all .3s ease-in-out;
			overflow: hidden;
			margin-bottom: 2.5rem;
		}
	}
</style>