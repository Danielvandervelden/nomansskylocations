<template>
	<div v-if="getUserData" class="nms-single-user">
		<h1>{{getUserData.display_name | capitalize}}'s profile</h1>
		<h2>Posts:</h2>
		<div class="nms-single-user__posts">
			<h3>Multitools:</h3>
				<nms-user-post
				 v-for="post in getMultitoolPosts" 
				 :key="post[Object.keys(post)].id"
				 :type="post[Object.keys(post)].type"
				 :galaxy="post[Object.keys(post)].galaxy"
				 :post_date="post[Object.keys(post)].post_date"
				 :rank="post[Object.keys(post)].rank"
				 :slots="post[Object.keys(post)].slots"
				 :image_url="post[Object.keys(post)].image_url"
				 :url="`/post/${post[Object.keys(post)].post_type}/${post[Object.keys(post)].type}/${post[Object.keys(post)].id}`"
				 ></nms-user-post>
			<h3>Ships:</h3>
				<nms-user-post
				 v-for="post in getShipPosts" 
				 :key="post[Object.keys(post)].id"
				 :type="post[Object.keys(post)].type"
				 :galaxy="post[Object.keys(post)].galaxy"
				 :post_date="post[Object.keys(post)].post_date"
				 :image_url="post[Object.keys(post)].image_url"
				 :url="`/post/${post[Object.keys(post)].post_type}/${post[Object.keys(post)].type}/${post[Object.keys(post)].id}`"
				 ></nms-user-post>
			<h3>Planets:</h3>
				<nms-user-post
				 v-for="post in getPlanetPosts" 
				 :key="post[Object.keys(post)].id"
				 :type="post[Object.keys(post)].type"
				 :galaxy="post[Object.keys(post)].galaxy"
				 :post_date="post[Object.keys(post)].post_date"
				 :weather="post[Object.keys(post)].weather"
				 :image_url="post[Object.keys(post)].image_url"
				 :url="`/post/${post[Object.keys(post)].post_type}/${post[Object.keys(post)].type}/${post[Object.keys(post)].id}`"
				 ></nms-user-post>
		</div>
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
		padding: 2rem;
		box-sizing: border-box;
	}
</style>