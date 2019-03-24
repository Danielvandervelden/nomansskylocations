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
		transition: all .3s ease-in-out;

		&:after{
			content: '';
			font-size: 1rem;
			opacity: 0;
			visibility: hidden;
			transition: all .3s ease-in-out;
			position: absolute;
			top: -.5rem;
			left: 0;
			padding: 0 .5rem;
			box-sizing: border-box;
			width: 100%;
			background-color: $red;
			color: #FFF;
		}
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
		border-style: none;
		border: 1px solid $grey;

		&:active,
		&:focus {
			outline: 0;
			border: 1px solid $green;
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