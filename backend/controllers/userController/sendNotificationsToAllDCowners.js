const mongoose = require('mongoose');

const sendNotifications = require('../../assets/utils/sendNotifications');

// Models
const User = mongoose.model('user');

module.exports = (req, res) => {
  const errors = {};

  if (req.user.type !== 'superadmin') {
    errors.unauthorized = 'You are not authorized';
    return res.status(401).json(errors);
  }

  User.find({ type: 'dcowner' })
    .then((users) => {
      const messages = [];
      users.forEach((user) => {
        if (user.pushNotificationToken) {
          messages.push({
            to: user.pushNotificationToken,
            sound: 'default',
            title: 'Obbaaa',
            body: 'This is a test',
          });
        }
      });
      if (messages.length > 0) {
        sendNotifications(messages);
      }
      return res.json(users);
    })
    .catch((err) => {
      errors.error = 'Error fetching users from database';
      res.status(500).json({ ...errors, ...err });
    });
};
