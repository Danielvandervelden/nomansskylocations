<template>
	<div class="nms__new-post">
		<div class="nms__new-post--container">
			<h1 class="nms__new-post--title">Create a new post</h1>
			<nms-select class="nms__new-post--search-select" v-model="value" :options="options">What would you like to post?</nms-select>
			<nms-button back="true">Back</nms-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: ['Multitools', 'Ships', 'Planets'],
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
		&--container {
			margin: 1.5rem 0;
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