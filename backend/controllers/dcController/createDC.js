const mongoose = require('mongoose');

// Models
const DC = mongoose.model('dc');

// Validations
const validateDC = require('../../validations/dc');

module.exports = (req, res) => {
  // Validate
  const { errors, isValid } = validateDC(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  if (req.user.type !== 'superadmin') {
    errors.unauthorized = 'You are not authorized';
    return res.status(401).json(errors);
  }

  // Check if there is a DC with the same name
  DC.findOne({ name: req.body.name })
    .then((dc) => {
      if (dc) {
        errors.name = 'This DC already exists';
        return res.status(400).json(errors);
      }
      // Create new dc
      const newDC = new DC({
        name: req.body.name,
        size: req.body.size,
        salesThisMonth: req.body.salesThisMonth,
        grassJellySalesThisMonth: req.body.grassJellySalesThisMonth,
        totalMonthlyTarget: req.body.totalMonthlyTarget,
        grassJellyMonthlyTarget: req.body.password,
      });

      newDC
        .save()
        .then((savedDC) => {
          res.json(savedDC);
        })
        .catch((dbError) => {
          errors.error = 'Error saving DC to database';
          return res.status(500).json({ ...errors, ...dbError });
        });
    })
    .catch((err) => {
      errors.error = 'Error exploring the database';
      return res.status(500).json({ ...errors, ...err });
    });
};
