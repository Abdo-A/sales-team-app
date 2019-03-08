const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController/index.js');


// @route  POST api/user
// @desc   User Registration - Create new user
// @access Public
// @errors firstName surname province subProvince password password2 general error
router.post('/', userController.registerUser);

// // @route  POST api/user/login
// // @desc   User Login - Return jwt token
// // @access Public
// // @errors incorrectinfo firstName surname password error
// router.post('/login', userController.loginUser);

// // @route  GET api/user/all/:type
// // @desc   Get all users
// // @access Public
// // @errors nousers error
// // @params type: salesreps or dcowners or supervisors or superadmins
// router.get('/all/:type', userController.getAllUsers);

// // @route  PATCH api/user
// // @desc   Update logged in user
// // @access Private
// // @errors first_name last_name email password password2 location error
// router.patch(
//   '/',
//   passport.authenticate('jwt', { session: false }),
//   userController.updateUser
// );

// // @route  DELETE api/user
// // @desc   Delete logged in user
// // @access Private
// // @errors error
// router.delete(
//   '/',
//   passport.authenticate('jwt', { session: false }),
//   userController.deleteUser
// );

// // @route  GET api/user
// // @desc   Get logged in user
// // @access Private
// // @errors error
// router.get(
//   '/',
//   passport.authenticate('jwt', { session: false }),
//   userController.getUser
// );

// // @route  GET api/user/:id
// // @desc   Get user by ID
// // @access Public
// // @errors
// router.get('/:id', userController.getUserById);

module.exports = router;
