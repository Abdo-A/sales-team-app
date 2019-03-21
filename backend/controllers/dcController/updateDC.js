const mongoose = require('mongoose');

// Models
const DC = mongoose.model('dc');

module.exports = (req, res) => {
  const errors = {};

  if (req.user.type !== 'superadmin') {
    errors.unauthorized = 'You are not authorized';
    return res.status(401).json(errors);
  }

  const newDCinfo = { ...req.body };

  // Resetting values back to their default value if they come as ''
  Object.keys(DC.schema.paths).forEach((key) => {
    const defaultValue = DC.schema.paths[key].options.default;
    if ((defaultValue || defaultValue === 0) && newDCinfo[key] === '') {
      newDCinfo[key] = defaultValue;
    }
  });

  DC.findOneAndUpdate(
    { _id: req.params.dcId },
    { $set: newDCinfo },
    { new: true },
  )
    .then(() => res.json({ success: true }))
    .catch((err) => {
      errors.error = 'Error checking for the DC in database';
      return res.status(500).json({ ...errors, ...err });
    });
};
