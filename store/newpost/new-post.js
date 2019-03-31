export const state = () => ({
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
})

export const getters = {
	getGlyphs: state => {
		return state.glyphs;
	}
}