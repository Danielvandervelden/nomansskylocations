const express = require('express');

const router = express.Router();

// Routes
const registerRoute = require('./auth/register.js');
const loginRoute = require('./auth/login.js');

router.use('/register', registerRoute);
router.use('/login', loginRoute);

module.exports = router;