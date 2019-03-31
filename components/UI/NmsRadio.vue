<template>
	<div class="radio-wrapper">
		<input @input="inputEvent($event)" :checked="checked" :name="name" :value="name" type="radio">
		<label :for="name"><slot></slot></label>
	</div>
</template>

<script>
	export default {
		props: [
			'name',
			'checked',
			'radiovalue'
		],
		data() {
			return {
				
			}
		},
		methods: {
			inputEvent(e) {
				this.$emit('input', this.radiovalue);
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>