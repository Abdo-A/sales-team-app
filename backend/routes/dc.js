const express = require('express');

const router = express.Router();
const passport = require('passport');

const dcController = require('../controllers/dcController/index.js');

// @route  POST api/dc
// @desc   Create new DC
// @access Private
// @errors name error
// @body   name size salesThisMonth grassJellySalesThisMonth totalMonthlyTarget grassJellyMonthlyTarget
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  dcController.createDC,
);

// @route  GET api/dc/all
// @desc   Get all DCs
// @access Private
// @errors nodcs error
router.get(
  '/all',
  passport.authenticate('jwt', { session: false }),
  dcController.getAllDCs,
);

// @route  PATCH api/dc/:dcId
// @desc   Edit a DC
// @access Private
// @errors unauthorized error
// @body   one or more of: name size salesThisMonth grassJellySalesThisMonth totalMonthlyTarget grassJellyMonthlyTarget
router.patch(
  '/:dcId',
  passport.authenticate('jwt', { session: false }),
  dcController.updateDC,
);

// @route  DELETE api/dc/:dcId
// @desc   Delete a DC
// @access Private
// @errors unauthorized error
router.delete(
  '/:dcId',
  passport.authenticate('jwt', { session: false }),
  dcController.deleteDC,
);

module.exports = router;
