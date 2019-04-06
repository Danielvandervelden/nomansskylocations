<template>
	<div v-if="getPostData !== null" class="nms-single-post__wrapper">
		<single-multitool :data="getPostData" v-if="getPostData.post_type == 'multitools'"></single-multitool>
		<single-ship :data="getPostData" v-else-if="getPostData.post_type == 'ships'"></single-ship>
		<single-planet :data="getPostData" v-else-if="getPostData.post_type == 'planets'"></single-planet>
	</div>
</template>

<script>
	import SingleMultitool from '@/components/post/Multitool.vue';
	import SingleShip from '@/components/post/Ship.vue';
	import SinglePlanet from '@/components/post/Planet.vue';
	export default {
		components: {
			'single-multitool': SingleMultitool,
			'single-ship': SingleShip,
			'single-planet': SinglePlanet
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
	.nms-single-post {
		&__wrapper {
			margin-top: 2rem;
			margin-bottom: 2rem;
			padding: 2rem;
			box-sizing: border-box;
			@include faded-bg();
		}
	}
</style>