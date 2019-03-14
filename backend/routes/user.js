const express = require('express');

const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/userController/index.js');

// @route  POST api/user
// @desc   User Registration - Create new user
// @access Public
// @errors firstName surname DCs password general error
router.post('/', userController.registerUser);

// @route  POST api/user/login
// @desc   User Login - Return jwt token
// @access Public
// @errors firstName surname password general error
router.post('/login', userController.loginUser);

// @route  GET api/user/all
// @desc   Get all users
// @access Public
// @errors nousers error
router.get('/all', userController.getAllUsers);

// @route  GET api/user/get/:key/:value
// @desc   Get users by a specific key and value
// @access Public
// @errors nousers error
// @params key, value
router.get('/get/:key/:value', userController.getUsers);

// @route  POST api/user/approve/:userId
// @desc   Approve a user's account
// @access Private
// @errors unauthorized error
router.post(
  '/approve/:userId',
  passport.authenticate('jwt', { session: false }),
  userController.approveUser,
);

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
