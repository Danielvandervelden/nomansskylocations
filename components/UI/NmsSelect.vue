<template>
	<div class="form-group">
		<label v-if="label" :for="name">{{label}}</label>
		<div class="select-wrapper">
			<select autocomplete="off" :name="name" @input="$emit('input', $event.target.value)">
				<option value="null" selected disabled hidden><slot></slot></option>
				<option v-for="option in options" :value="option" :key="option">{{option}}</option>
			</select>
		</div>
	</div>
</template>

<script>
	export default {
		props: [
			'options',
			'name',
			'label'
		],
		data() {
			return {
				
			}
		}
	}
</script>
<style scoped lang='scss'>

	label {
		margin-bottom: .5rem;
		display: block;
	}

	.select-wrapper {
		position: relative;
		display: inline-block;
		width: 100%;

		&:after {
			@include fa-icon('\f078', 1.6rem, $red);
			pointer-events: none;
			position: absolute;
			right: 1rem;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	select {
		appearance: none;
		border: 1px solid #e9e9e9;
		padding: 1.2rem;
		border-radius: .8rem;
		width: 100%;
		outline: 0;
		
		&:focus,
		&:active {
			outline: 0;
		}
	}

	select:-moz-focusring {
		color: transparent;
		text-shadow: 0 0 0 #000;
		/* your normal text color here */
	}

	select:-moz-focusring * {
		color: #000;
		/* your normal text color here */
		text-shadow: none;
	}
</style>