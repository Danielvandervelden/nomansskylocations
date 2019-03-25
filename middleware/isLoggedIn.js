export default (context) => {
	
	let userCookie = context.app.$cookies.get('user');

	if(context.store.getters['login/isLoggedIn'] === null && userCookie == undefined) {
		return context.redirect('/login');
	} else {
		context.store.dispatch('login/checkLegitimateUser', userCookie);
	}
}