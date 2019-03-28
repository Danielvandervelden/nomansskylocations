<template>
	<div class="nms-container">
		<div class="title-wrapper">
			<h1>NO MANS SKY LOCATIONS</h1>
		</div>
		<section class="content">
			<div class="content__wrapper">
				<h4>Please login to your account in order to post</h4>
				<form>
					<nms-input class="login-input" v-model="user.email" type="email" placeholder="Enter your email"></nms-input>
					<nms-input class="login-input" v-model="user.password" type="password" placeholder="Enter your password"></nms-input>
					<nms-button @click.native.prevent="loginUser" color="green" class="inline-button">Login</nms-button>
					<nms-button color="red" class="inline-button" link="/register">Register</nms-button>
					<nms-button class="inline-button float-right" back="true">Back</nms-button>
				</form>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					email: '',
					password: ''
				}
			}
		},
		methods: {
			loginUser() {
				this.$store.dispatch('users/login/loginUser', this.user);
			}
		}
	}
</script>
<style scoped lang='scss'>
.title-wrapper {
	margin-bottom: 5rem;

	h1 {
		color: #FFF;
		font-size: 6rem;
		text-align: center;
	}
}

h4 {
	text-align: center;
}
</style>