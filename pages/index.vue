<template>
  <div>
    <h3><span v-if="getDisplayName != null">Hello {{getDisplayName | capitalize}}</span>What would you like to do?</h3>
	<nms-button color="red" link="search">Search</nms-button>
	<nms-button color="green" link="new-post">Post</nms-button>
  </div>
</template>

<script>

export default {
  components: {
	  
  },
  computed: {
	  getDisplayName() {
		  return this.$store.getters['login/getDisplayName'];
	  }
  }
}
</script>

<style lang="scss" scoped>
	.button:not(:last-child) {
		margin-bottom: 1.5rem;
	}

	h3 span {
		display: block;
	}
</style>

