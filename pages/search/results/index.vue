<template>
	<div class="nms-search-results">
		<div class="nms-search-results__wrapper">
			<h1 class="nms-search-results__title">{{getSearchResults.title}}</h1>
			<nms-search-results :data="getSearchResults.results"></nms-search-results>
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
				console.log(this.$store.getters['search/search/getResults'].results);
				return this.$store.getters['search/search/getResults'];
			}
		}
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