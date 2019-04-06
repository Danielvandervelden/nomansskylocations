<template>
	<div class="nms-search-results">
		<div v-if="getSearchResults.results.length !== 0" class="nms-search-results__wrapper">
			<h1 class="nms-search-results__title">{{getSearchResults.title}}</h1>
			<nms-search-results :data="getSearchResults.results"></nms-search-results>
			<nms-button class="margin-top" back="true">Back</nms-button>
		</div>
		<div v-else class="nms-search-results__wrapper">
			<p>Your search didn't yield any results.. Try again by clicking the back button!</p>	
			<nms-button class="margin-top" back="true">Back</nms-button>		
		</div>
	</div>
</template>

<script>
	import NmsSearchResults from "@/components/custom/NmsSearchResults.vue";
	export default {
		components: {
			'nms-search-results': NmsSearchResults
		},
		computed: {
			getSearchResults() {
				return this.$store.getters['search/search/getResults'];
			}
		},
	}
</script>
<style scoped lang='scss'>
	.nms-search-results {
		padding: 2rem;
		box-sizing: border-box;

		&__wrapper {
			padding: 3rem;
			box-sizing: border-box;
			@include faded-bg();
		}

		h1 {
			font-size: 2rem;
			text-align: center;
		}
	}
</style>