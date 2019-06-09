export const state = () => ({
	title: "NMS Database"
})

export const getters = {
	getAppTitle: state => {
		return state.title;
	}
}