const mongoose = require('mongoose');

// Models
const DC = mongoose.model('dc');

module.exports = (req, res) => {
  const errors = {};

  if (req.user.type !== 'superadmin') {
    errors.unauthorized = 'You are not authorized';
    return res.status(401).json(errors);
  }

  DC.findOneAndDelete({ _id: req.params.dcId })
    .then(() => res.json({ success: true }))
    .catch((err) => {
      errors.error = 'Error checking for the DC in database';
      return res.status(500).json({ ...errors, ...err });
    });
};
