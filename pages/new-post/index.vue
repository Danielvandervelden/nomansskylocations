<template>
	<div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		created() {
			this.$store.dispatch('users/login/checkIfLoggedIn');
		},
	}
</script>
<style scoped lang='scss'>
	
</style>