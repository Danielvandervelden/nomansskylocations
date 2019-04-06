<template>
	<div class="glyph__selector">
		<label v-if="label" for="glyph-input">{{label}}</label>
		<div id="glyph__selector" class="glyph-input__wrapper">
			<input @input="inputHandler($event)" name="glyph-input" class="glyph-input" type="text">
		</div>
		<div class="glyph__selector--explanation">
			<div v-for="(glyph, index) in glyphs" :key="index" class="glyph__selector--explanation_single">
				<div class="glyph-character">{{glyph.glyph}} = </div>
				<div class="glyph-example">{{glyph.glyph}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: [
			'label'
		],
		data() {
			return {
				glyphs: [
					{glyph: '0'},
					{glyph: '1'},
					{glyph: '2'},
					{glyph: '3'},
					{glyph: '4'},
					{glyph: '5'},
					{glyph: '6'},
					{glyph: '7'},
					{glyph: '8'},
					{glyph: '9'},
					{glyph: 'A'},
					{glyph: 'B'},
					{glyph: 'C'},
					{glyph: 'D'},
					{glyph: 'E'},
					{glyph: 'F'},
				]
			}
		},
		methods: {
			inputHandler(e) {
				this.$emit('input', e.target.value);
			}
		},
	}
</script>
<style scoped lang='scss'>
	.glyph-input {
		font-family: 'glyphs-mono';
		width: 100%;
		min-height: 10rem;
		font-size: 6.8rem;
		letter-spacing: -5px;
		border-radius: .8rem;
		border: 0;
		padding: 0 1rem;
		box-sizing: border-box;

		&__wrapper {
			position: relative;
		}
		
		&:active,
		&:focus {
			outline: 0;
		}
	}

	label {
		margin-bottom: 1rem;
		display: block;
	}

	.glyph__selector {
		&--explanation {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;

			&_single {
				flex: 0 1 25%;
				text-align: center;
			}

			.glyph-example {
				font-family: 'glyphs-mono';
				display: inline-block;
				font-size: 3rem;
			}

			.glyph-character {
				display: inline-block;
			}
		}
	}
</style>