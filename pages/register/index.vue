<template>
	<div>
		<div class="title-wrapper">
			<h1>{{ getAppTitle }}</h1>
		</div>
		<section class="content">
			<div class="content__wrapper">
				<div class="nms-register">
					<h4>Register an account</h4>
					<form method="POST">
						<nms-input class="display-name" v-model="user.display_name" kind="text" placeholder="Enter your chosen display name"></nms-input>
						<nms-input class="email" v-model="user.email" kind="email" placeholder="Enter your email"></nms-input>
						<nms-input class="password" v-model="user.password" kind="password" placeholder="Enter a password"></nms-input>
						<nms-input class="password" v-model="user.confirmedPassword" kind="password" placeholder="Please confirm your password"></nms-input>
						<nms-button class="inline-button" chosenType="submit" color="green" @click.native.prevent="registerUser()">Register</nms-button>
						<nms-button class="float-right inline-button" back="true">Back</nms-button>
					</form>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					display_name: '',
					email: '',
					password: '',
					confirmedPassword: '',
				}
			}
		},
		methods: {
			registerUser() {
				this.loading(true);
				this.$store.dispatch('users/register/registerUser', this.user);
			}
		},
		computed: {
			getAppTitle() {
				return this.$store.getters['getAppTitle'];
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title-wrapper {
			margin-bottom: 5rem;

			h1 {
				color: #FFF;
				font-size: 6rem;
				text-align: center;
			}
		}
</style>
