const express = require('express')
const router= express.Router()
const userController=require('../controllers/usersController')

router.route('/register').post(userController.register)
router.route('/login').post(userController.login)
module.exports = router