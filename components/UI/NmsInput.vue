<template>
	<div class="form-control">
		<label v-if="label" :for="name">{{label}}</label>
		<div :id="name" class="input-textarea-wrapper">
			<input v-if="checkType" :name="name" class="nms-input" @input="inputHandler($event)" :type="kind" :placeholder="placeholder">
			<textarea class="nms-textarea" v-else-if="kind === 'textarea'" @input="inputHandler($event)" :placeholder="placeholder" />
		</div>
	</div>
</template>

<script>
	export default {
		props: [
			'kind',
			'placeholder',
			'label',
			'name',
		],
		data() {
			return {
			}
		},
		computed: {
			checkType() {
				if(this.kind === 'text' || this.kind === 'email' || this.kind === 'password' || this.kind === 'number') {
					return true
				} else {
					return false
				}
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

	.input-textarea-wrapper {
		position: relative;
	}

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
		border-radius: .8rem;
		background-color: #FFF;
		width: 100%;
		box-sizing: border-box;
		border-style: none;
		min-height: 5rem;

		&:active,
		&:focus {
			outline: 0;
		}
	}

	.nms-textarea {
		padding: 1rem 1.5rem;
		border-radius: .8rem;
		background-color: #FFF;
		width: 100%;
		box-sizing: border-box;
		min-height: 15rem;
		border: 0;

		&:active,
		&:focus {
			outline: 0;
		}
	}

	input,
	textarea {
		font-family: inherit;
		font-size: 1.6rem;
	}
</style>