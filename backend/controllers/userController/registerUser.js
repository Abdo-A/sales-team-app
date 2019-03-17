const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const sendNotifications = require('../../assets/utils/sendNotifications');

// Translation files
const userRelatedData = require('../../assets/data/translations/userRelatedData');
const notificationsData = require('../../assets/data/translations/notificationsData');

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
        errors.general = userRelatedData.existingUserError;
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
              // Send notification to superadmin to approve this user
              User.find({ type: 'superadmin' }).then((superadmins) => {
                const messages = [];

                superadmins.forEach((superadmin) => {
                  if (!superadmin.pushNotificationToken) {
                    return;
                  }

                  let notificationBody = notificationsData.forUserApprovalBody;
                  if (Array.isArray(newUser.DCs) && newUser.DCs.length > 0) {
                    notificationBody = `${notificationBody} ${
                      notificationsData.from
                    } ${newUser.DCs[0]}`;
                  }

                  messages.push({
                    to: superadmin.pushNotificationToken,
                    sound: 'default',
                    title: `${newUser.firstName} ${newUser.surname} ${
                      notificationsData.forUserApprovalTitle
                    }`,
                    body: notificationBody,
                  });
                });
                if (messages.length > 0) {
                  sendNotifications(messages);
                }
              });

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
