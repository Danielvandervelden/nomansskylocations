<template>
  <div class="nms-container">
    <div class="title-wrapper">
      <h1>NO MANS SKY LOCATIONS</h1>
    </div>
    <section class="content">
        <div class="content__wrapper">
          <nuxt />
        </div>
    </section>
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

	.title-wrapper {
		margin-bottom: 5rem;
	}

	h1 {
		color: #FFF;
		font-size: 6rem;
		text-align: center;
	}

	.content {

		&__wrapper {
			max-width: 600px;
			margin: 0 auto;
			background-color: rgba(255, 255, 255, .7);
			padding: 1.5rem;
			box-sizing: border-box;
			transition: all .3s ease-in-out;
		}

		h3 {
			text-align: center;
		}
	}
</style>

