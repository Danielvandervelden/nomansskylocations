<template>
	<nuxt-link :class="color" v-if="checkProps" tag="a" :to="link" class="button"><slot /></nuxt-link>
	<button :class="color" class="button" v-else-if="type == 'submit'" :type="type"><slot /></button>
	<a :class="color" v-else-if="back" @click="$router.back()" class="back-button button"><slot /></a>
	<a :class="color" :href="extLink" target="_blank" class="button" v-else><slot /></a>
</template>

<script>
	export default {
		props: [
			'link',
			'type',
			'extLink',
			'color',
			'back'
		],
		data() {
			return {
				
			}
		},
		computed: {
			checkProps() {
				return this.link && this.type !== 'submit' ?  true : false;
			}
		}
	}
</script>
<style scoped lang='scss'>

</style>