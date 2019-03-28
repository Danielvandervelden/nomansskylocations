<template>
	<div>
		<form>
			<nms-button back="true">Back</nms-button>
		</form>
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
		layout: 'new-post'
	}
</script>
<style scoped lang='scss'>
	
</style>