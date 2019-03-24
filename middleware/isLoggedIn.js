export default ({store, redirect}) => {
	if(!store.getters['login/isLoggedIn']) {
		return redirect('/register');
	}
}