const mongoose = require('mongoose');

const sendNotifications = require('../../assets/utils/sendNotifications');

// Translations
const notificationsData = require('../../assets/data/translations/notificationsData');

// Models
const User = mongoose.model('user');
const DC = mongoose.model('dc');

module.exports = (req, res) => {
  const errors = {};

  if (req.user.type !== 'superadmin') {
    errors.unauthorized = 'You are not authorized';
    return res.status(401).json(errors);
  }

  DC.find()
    .sort({ date: -1 })
    .then((DCs) => {
      User.find({ type: 'dcowner' })
        .then((users) => {
          const messages = [];
          users.forEach((user) => {
            if (!user.pushNotificationToken) {
              return;
            }

            user.DCs.forEach((ownedDC) => {
              const ownedDCSize = DCs.find(dc => dc.name === ownedDC).size;
              const ownedDCRank = DCs.filter(dc => dc.size === ownedDCSize)
                .sort((dc1, dc2) => dc2.salesThisMonth - dc1.salesThisMonth)
                .map(dc => dc.name)
                .indexOf(ownedDC) + 1;

              messages.push({
                to: user.pushNotificationToken,
                sound: 'default',
                title: notificationsData.onDCUpdateTitle,
                body: `${
                  notificationsData.onDCUpdateBody
                } ${ownedDC} : ${ownedDCRank}`,
              });
            });
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
    })
    .catch((err) => {
      errors.error = 'Error fetching DCs from database';
      res.status(500).json({ ...errors, ...err });
    });
};
