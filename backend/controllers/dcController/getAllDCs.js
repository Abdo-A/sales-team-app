const mongoose = require('mongoose');

// Models
const DC = mongoose.model('dc');

module.exports = (req, res) => {
  const errors = {};

  DC.find()
    .sort({ date: -1 })
    .then((DCs) => {
      if (DCs.length === 0) {
        errors.nodcs = 'No DCs found';
        return res.status(404).json(errors);
      }
      return res.json(DCs);
    })
    .catch((err) => {
      errors.error = 'Error fetching DCs from database';
      res.status(500).json({ ...errors, ...err });
    });
};
