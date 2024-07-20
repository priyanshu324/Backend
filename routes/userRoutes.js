const express = require('express');
const { registerController, loginController, updateUserController, requireSingIn } = require('../controllers/userControllers');

// router object
const router = express.Router()

// route
// Register || Post 
router.post('/register', registerController)

// Login || Get
router.post('/login', loginController)

//UPDATE || PUT
router.put("/update-user", requireSingIn, updateUserController);

// exports
module.exports = router 