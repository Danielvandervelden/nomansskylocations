<template>
  <div>
    <h3>What would you like to do?</h3>
	<nms-button color="red" link="search">Search</nms-button>
	<nms-button color="green" link="new-post">Post</nms-button>
  </div>
</template>

<script>

export default {
  components: {
	  
  }
}
</script>

<style lang="scss" scoped>
	.button:not(:last-child) {
		margin-bottom: 1.5rem;
	}
</style>

