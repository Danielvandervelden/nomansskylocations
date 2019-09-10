<template>
	<div v-if="getUserData" class="nms-single-user">
		<h1>{{getUserData.display_name | capitalize}}'s profile</h1>
		<h2>Posts:</h2>
		<div class="nms-single-user__posts">
			<h3>Multitools:</h3>
				<nms-user-post
				 v-for="post in getMultitoolPosts" 
				 :key="post.id"
				 :type="post.type"
				 :galaxy="post.galaxy"
				 :post_date="post.post_date"
				 :rank="post.rank"
				 :slots="post.slots"
				 :image_url="post.image_url"
				 :url="`/post/${post.post_type}/${post.type}/${post.id}`"
				 ></nms-user-post>
				 <span v-if="getMultitoolPosts.length === 0">This user has no multitool posts yet.</span>
			<h3>Ships:</h3>
				<nms-user-post
				 v-for="post in getShipPosts" 
				 :key="post.id"
				 :type="post.type"
				 :galaxy="post.galaxy"
				 :post_date="post.post_date"
				 :image_url="post.image_url"
				 :url="`/post/${post.post_type}/${post.type}/${post.id}`"
				 ></nms-user-post>
				 <span v-if="getShipPosts.length === 0">This user has no ship posts yet.</span>
			<h3>Planets:</h3>
				<nms-user-post
				 v-for="post in getPlanetPosts" 
				 :key="post.id"
				 :type="post.type"
				 :galaxy="post.galaxy"
				 :post_date="post.post_date"
				 :weather="post.weather"
				 :image_url="post.image_url"
				 :url="`/post/${post.post_type}/${post.type}/${post.id}`"
				 ></nms-user-post>
				 <span v-if="getPlanetPosts.length === 0">This user has no planet posts yet.</span>
		</div>
		<nms-button class="margin-top" back="true">Back</nms-button>
	</div>
</template>

<script>
	import NmsUserPost from '@/components/user/Post.vue';
	export default {
		components: {
			'nms-user-post': NmsUserPost
		},
		computed: {
			getUserData() {
				return this.$store.getters['users/user/getUserData'];
			},
			getMultitoolPosts() {
				return this.$store.getters['users/user/getMultitoolPosts'];
			},
			getShipPosts() {
				return this.$store.getters['users/user/getShipPosts'];
			},
			getPlanetPosts() {
				return this.$store.getters['users/user/getPlanetPosts'];
			}
		},
		created() {
			this.$store.dispatch('users/user/fetchUserData', this.$route.params.id);
		}
	}
</script>
<style scoped lang='scss'>
	.nms-single-user {
		@include faded-bg();
		margin-top: 2rem;
		margin-bottom: 2rem;
		padding: 2rem;
		box-sizing: border-box;
	}
</style>