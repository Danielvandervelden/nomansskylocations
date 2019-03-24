<template>
	<div class="nms-register">
		<h4>Register an account</h4>
		<form method="POST">
			<nms-input class="email" v-model="user.email" type="email" placeholder="Enter your email"></nms-input>
			<nms-input class="password" v-model="user.password" type="password" placeholder="Enter a password"></nms-input>
			<nms-input class="password" v-model="user.confirmedPassword" type="password" placeholder="Please confirm your password"></nms-input>
			<nms-button class="inline-button" chosenType="submit" color="green" @click.native.prevent="registerUser()">Register</nms-button>
			<nms-button class="float-right inline-button" back="true">Back</nms-button>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					email: '',
					password: '',
					confirmedPassword: '',
				}
			}
		},
		methods: {
			registerUser() {
				// if passwords don't match then give an error. 
				if(this.user.password === this.user.confirmedPassword && this.user.password.length >= 6) {
					this.$store.dispatch('register/registerUser', this.user);
				} else {
					[...document.querySelectorAll('.password')].forEach(el => {
						this.createMessage("Passwords need to match and be more than 5 characters", el);
					})
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>