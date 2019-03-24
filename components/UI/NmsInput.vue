<template>
	<div class="form-control">
		<label v-if="label" :for="name">{{label}}</label>
		<input :style="{ 'border' : `1px solid ${border_color }`}" v-if="[type == 'text', type == 'email', type == 'password']" :name="name" class="nms-input" @input="inputHandler($event)" :type="type" :placeholder="placeholder">
		<textarea :style="{ 'border' : `1px solid ${border_color }`}" class="nms-textarea" v-else-if="type = 'textarea'" @input="inputHandler($event)" :placeholder="placeholder" />
	</div>
</template>

<script>
	export default {
		props: [
			'type',
			'placeholder',
			'value',
			'label',
			'name',
			'border_color'
		],
		data() {
			return {
			}
		},
		methods: {
			inputHandler(e) {
				this.$emit('input', e.target.value);
			}
		}
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';

	.form-control {
		margin: 1.5rem 0;
	}

	label {
		display: block;
		margin-bottom: 1rem
	}

	.nms-input {
		padding: 1rem 1.5rem;
		border-radius: .5rem;
		background-color: transparent;
		width: 100%;
		box-sizing: border-box;

		&:active,
		&:focus {
			outline: 0;
			border: 1px solid $grey;
		}
	}

	.nms-textarea {
		padding: 1rem 1.5rem;
		border: 1px solid $grey;
		border-radius: 5px;
		background-color: transparent;
		width: 100%;
		box-sizing: border-box;

		&:active,
		&:focus {
			outline: 0;
			border: 1px solid $grey;
		}
	}
</style>