const express = require('express');

const router = express.Router();
const passport = require('passport');

const dcController = require('../controllers/dcController/index.js');

// @route  POST api/dc
// @desc   Create new DC
// @access Private
// @errors name error
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  dcController.createDC,
);

module.exports = router;
