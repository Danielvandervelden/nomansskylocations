<template>
  <div>
  	<div class="title-wrapper">
  		<h1>NO MANS SKY LOCATIONS</h1>
  	</div>
  	<section class="content">
  		<div class="content__wrapper">
  			<h3><span v-if="getDisplayName != null">Hello {{getDisplayName | capitalize}}</span>What would you like to do?</h3>
  			<nms-button color="red" link="search">Search</nms-button>
  			<nms-button v-if="isLoggedIn !== null" color="green" link="new-post">Post</nms-button>
  			<nms-button v-else color="green" link="login">Login to post</nms-button>
  		</div>
  	</section>
  </div>
</template>

<script>

export default {
  components: {
	  
  },
  computed: {
	  getDisplayName() {
		  return this.$store.getters['users/login/getDisplayName'];
	  },

	  isLoggedIn() {
		  return this.$store.getters['users/login/isLoggedIn'];
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

	.title-wrapper {
		margin-bottom: 5rem;

		h1 {
			color: #FFF;
			font-size: 6rem;
			text-align: center;
		}
	}
</style>

