<template>
	<div class="nms-register">
		<h4>Register an account</h4>
		<form method="POST">
			<nms-input class="display-name" v-model="user.displayName" type="text" placeholder="Enter your chosen display name"></nms-input>
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
					displayName: '',
					email: '',
					password: '',
					confirmedPassword: '',
				}
			}
		},
		methods: {
			registerUser() {
				// first check if the displayname isn't taken..
				this.$axios.$get('users.json')
				.then(res => {
					
					let takenNames = [];
					console.log(res);
					// if passwords don't match AND it isn't less than 5 characters AND the displayname isn't taken.
					if(this.user.password === this.user.confirmedPassword && this.user.password.length >= 6 && !takenNames.includes(this.user.displayName)) {
						this.$store.dispatch('register/registerUser', this.user);
					}
					
					if(takenNames.includes(this.user.displayName)) {
						[...document.querySelectorAll('.display-name')].forEach(el => {
							this.createMessage("This display name is already taken.", el);
						})
					} 
					if(this.user.password !== this.user.confirmedPassword) {
						[...document.querySelectorAll('.password')].forEach(el => {
							this.createMessage("Passwords need to match.", el);
						})
					} else if(this.user.password.length < 6) {
						[...document.querySelectorAll('.password')].forEach(el => {
							this.createMessage("Passwords needs to be more than 5 characters.", el);
						})
					}
				})
				.catch(error => {console.log(error.response)})
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>