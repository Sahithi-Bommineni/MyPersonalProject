const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers'); //import the auth controller

router.post('/register', authController.register); // Route for user registration
router.post('/login', authController.login); // Route for user login

module.exports = router; // Export the router
