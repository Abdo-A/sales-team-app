const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const keys = require('../../config/keys');

// Models
const User = mongoose.model('user');

// Validations
const validateLoginUser = require('../../validations/loginUser');

module.exports = (req, res) => {
  // Validate
  const { errors, isValid } = validateLoginUser(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { firstName, surname, password } = req.body;

  // Check for the user email
  User.findOne({ firstName, surname }).then((user) => {
    if (!user) {
      errors.general = 'Incorrect info';
      return res.status(400).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        errors.password = 'Incorrect password';
        return res.status(400).json(errors);
      }

      // User Matched

      // JWT Payload
      const TokenPayload = {
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        type: user.type,
        province: user.province,
        subProvince: user.subProvince,
        approved: user.approved,
        avatar: user.avatar,
        registrationDate: user.registrationDate,
      };

      // Make JWT
      jwt.sign(
        TokenPayload,
        keys.secretOrKey,
        // { expiresIn: 604800 },
        (err, token) => res.json({ success: true, token: `Bearer ${token}` }),
      );
    });
  });
};
