const router = require('express').Router();
const firebase = require('../../database/firebase');

router.post('/login-user', (req, res, next) => {
	firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
	.then(response => {
		let user = firebase.auth().currentUser;
		res.status(200).send(JSON.stringify(user));
	})
	.catch(e => {
		res.status(500).send({message: e.code});
	})
});

module.exports = router;