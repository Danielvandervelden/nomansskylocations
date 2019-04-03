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
			this.$store.dispatch('post/single-post/fetchPostData', this.$route.params.id);
		}
	}
</script>
<style scoped lang='scss'>
	
</style>