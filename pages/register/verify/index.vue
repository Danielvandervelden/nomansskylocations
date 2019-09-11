<template>
	<section class="content">
			<div class="content__wrapper">
				<h2>Email verification</h2>
				<div class="nms-verify-email">
					<div v-if="status === true">
						Thank you for verifying your email address. You will be redirected to the login page in 5 seconds. Or click the button below if you're impatient :)

						<nms-button class="margin-top" link="/login" color="green">To login</nms-button>
					</div>
					<div v-else-if="status === false">
						Something didn't go the way it should. Did you get here through the link in the verification email? Or are you poking around in the application? In any case if you believe this to be an error contact me.
						<nms-button class="margin-top" link="/" color="green">To home</nms-button>
					</div>
				</div>
			</div>
		</section>
</template>

<script>
	import { auth } from '@/plugins/database/firebase.js';

	export default {
		data() {
			return {
				status: null
			}
		},
		mounted() {
			const mode = this.getParameterByName('mode');
			const oobCode = this.getParameterByName('oobCode');

			if(mode === null || oobCode === null) {
				this.status = false;
				return;
			}

			auth.applyActionCode(oobCode)
			.then(res => {
				this.status = true
			})
			.catch(e => {
				console.log(e);
			})
		}
	}
</script>
<style scoped lang='scss'>
	.content {
		margin-top: 9rem;
	}
</style>