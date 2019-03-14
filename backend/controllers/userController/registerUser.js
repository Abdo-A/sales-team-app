const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

// Validations
const validateUser = require('../../validations/user');

module.exports = (req, res) => {
  // Validate
  const { errors, isValid } = validateUser(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Check if there is a user with the same firstName or surname
  User.findOne({ firstName: req.body.firstName, surname: req.body.surname })
    .then((user) => {
      if (user) {
        errors.general = 'This user already exists';
        return res.status(400).json(errors);
      }
      // Create new user
      const newUser = new User({
        firstName: req.body.firstName,
        surname: req.body.surname,
        type: req.body.type,
        DCs: req.body.DCs,
        password: req.body.password,
        actualPassword: req.body.password,
        avatar: req.body.avatar,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (hasingErr, hash) => {
          if (hasingErr) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((savedUser) => {
              res.json(savedUser);
            })
            .catch((dbError) => {
              errors.error = 'Error saving user to database';
              return res.status(500).json({ ...errors, ...dbError });
            });
        });
      });
    })
    .catch((err) => {
      errors.error = 'Error exploring the database';
      return res.status(500).json({ ...errors, ...err });
    });
};
