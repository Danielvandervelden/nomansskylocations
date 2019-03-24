export default ({store, redirect}) => {
	if(store.getters['login/isLoggedIn'] === null) {
		return redirect('/login');
	}
}