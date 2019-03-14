const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

module.exports = (req, res) => {
  const errors = {};

  if (
    !(
      req.user.type === 'superadmin'
      || req.params.userId === req.user._id.toString()
    )
  ) {
    errors.unauthorized = 'You are not authorized';
    return res.status(401).json(errors);
  }

  User.findOneAndDelete({ _id: req.params.userId })
    .then(() => res.json({ success: true }))
    .catch((err) => {
      errors.error = 'Error checking for the user in database';
      return res.status(500).json({ ...errors, ...err });
    });
};
