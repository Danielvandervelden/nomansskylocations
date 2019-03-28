<template>
 <div class="nms-container">
	 <nuxt />
 </div>
</template>

<script>
export default {
	created() {
		if(this.$store.getters['users/login/isLoggedIn'] == null) {
			this.$store.dispatch('users/login/initAuth');
		}
	}
}
</script>


<style lang="scss">
	.nms-container {
		max-width: 1230px;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		box-sizing: border-box;
		margin: 0 auto;
	}

	.content {

		&__wrapper {
			max-width: 600px;
			margin: 0 auto;
			@include faded-bg();
			padding: 1.5rem;
			box-sizing: border-box;
			transition: all .3s ease-in-out;
		}

		h3 {
			text-align: center;
		}
	}
</style>

