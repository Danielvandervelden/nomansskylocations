const express = require('express');

const router = express.Router();

// Routes
const registerRoute = require('./auth/register.js');

router.use('/register', registerRoute);

module.exports = router;