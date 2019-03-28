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
				this.$store.dispatch('users/register/registerUser', this.user);
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>