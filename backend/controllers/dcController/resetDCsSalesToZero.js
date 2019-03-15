const mongoose = require('mongoose');

// Models
const DC = mongoose.model('dc');

module.exports = (req, res) => {
  const errors = {};

  if (req.user.type !== 'superadmin') {
    errors.unauthorized = 'You are not authorized';
    return res.status(401).json(errors);
  }

  DC.find()
    .then((DCs) => {
      DCs.forEach((dc, i) => {
        dc.salesThisMonth = 0;
        dc.grassJellySalesThisMonth = 0;
        dc.save()
          .then(() => {
            if (i === DCs.length - 1) {
              return res.json({ success: true });
            }
          })
          .catch((err) => {
            errors.error = 'Error saving DCs';
            res.status(500).json({ ...errors, ...err });
          });
      });
    })
    .catch((err) => {
      errors.error = 'Error fetching DCs from database';
      res.status(500).json({ ...errors, ...err });
    });
};
