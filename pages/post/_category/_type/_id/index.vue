<template>
	<div>
		{{getPostData}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			getPostData() {
				return this.$store.getters['post/single-post/getPostData'];
			}
		},
		mounted() {
			this.$store.dispatch('post/single-post/fetchPostData', {category: this.$route.params.category, type: this.$route.params.type, id: this.$route.params.id});
		}
	}
</script>
<style scoped lang='scss'>
	
</style>