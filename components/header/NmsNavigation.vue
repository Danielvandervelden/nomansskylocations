<template>
	<nav class="nms-navigation">
		<div @click="toggleNav" class="nms-navigation__trigger">
			<button class="hamburger hamburger--elastic" type="button">
			<span class="hamburger-box">
				<span class="hamburger-inner"></span>
			</span>
			</button> 
		</div>

		<div class="nms-navigation__wrapper">
			<div class="nms-navigation__inner">
				<nuxt-link @click.native="closeNav" class="nms-navigation__item" tag="a" to="/">Home</nuxt-link>
				<nuxt-link @click.native="closeNav" class="nms-navigation__item" tag="a" to="/search">Search</nuxt-link>
				<nuxt-link @click.native="closeNav" class="nms-navigation__item" tag="a" v-if="isLoggedIn" to="/new-post">Post</nuxt-link>
				<nuxt-link @click.native="closeNav" class="nms-navigation__item" tag="a" v-if="isLoggedIn" :to="`/user/${getUser.user_id}`">My Profile</nuxt-link>
				<a @click="closeNav(); logoutUser();" class="nms-navigation__item" v-if="isLoggedIn">Logout</a>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		computed: {
			isLoggedIn() { 
				return this.$store.getters['users/login/isLoggedIn'];
			},
			getUser() {
				return this.$store.getters['users/login/getUser'];
			}
		},
		methods: {
			toggleNav(e) {
				let nav = document.querySelector('nav.nms-navigation');
				let nav_button = nav.querySelector('button.hamburger');
				nav_button.classList.contains('is-active') ? nav_button.classList.remove('is-active') : nav_button.classList.add('is-active')
				nav.classList.contains('active') ? nav.classList.remove('active') : nav.classList.add('active');
			},
			closeNav(e) {
				let nav = document.querySelector('nav.nms-navigation');
				let nav_button = nav.querySelector('button.hamburger');
				nav_button.classList.remove('is-active');
				nav.classList.remove('active');
			},
			logoutUser() {
				this.loading(true);
				this.$store.commit('users/login/logoutUser');
			},
		},
	}
</script>
<style scoped lang='scss'>
@import "~assets/styles/hamburgers/hamburgers.scss";
@import "~assets/styles/hamburgers/_base.scss";


	.nms-navigation {
		position: fixed;
		z-index: 100;
		top: 2rem;
		right:2rem;

		&__trigger {
			position: relative;
			z-index: 100;
			width: 5rem;
			height: 5rem;
			border-radius: 50%;
			color: #FFF;
			background-color: $red;
			box-shadow: .2rem .2rem .5rem rgba(0, 0, 0, .5);
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			transition: all .3s ease-in-out;

			&:hover {
				background-color: lighten($red, 15%);
			}

			button {
				height: 2.4rem;
				width: 2rem;
				padding: 0;
				outline: 0;

				span:not(.hamburger-box) {
					width: 2rem;
					background-color: #FFF;

					&:before,
					&:after {
						width: 2rem;
						background-color: #FFF !important;
					}

					&.hamburger-inner {
						background-color: #FFF !important;
					}
				}
			}
		}

		&__wrapper {
			min-width: 100vw;
			min-height: 100vh;
			background-color: $red;
			position: fixed;
			right: -100%;
			top: -100%;
			z-index: 99;
			border-radius: 100%;
			transition: all .3s ease-in-out;
		}

		&__inner {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			a {
				display: block;
				text-decoration: none;
				color: #FFF;
				cursor: pointer;
				font-size: 4rem;
				transition: all .3s ease-in-out;

				&:hover {
					color: $green;
				}
			}
		}

		&.active {
			.nms-navigation {
				&__trigger {
					box-shadow: none;

				}

				&__wrapper {
					right: 0;
					top: 0;
					border-radius: 0;
				}
			}
		}
	}
</style>