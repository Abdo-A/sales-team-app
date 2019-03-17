const mongoose = require('mongoose');
const schedule = require('node-schedule');

const sendNotifications = require('../utils/sendNotifications');

// Modals
const User = mongoose.model('user');
const DC = mongoose.model('dc');

schedule.scheduleJob('0 9 * * *', () => {
  DC.find().then((DCs) => {
    const salesSoFar = DCs.reduce((acc, dc) => acc + dc.salesThisMonth, 0);

    User.find({ type: 'superadmin' }).then((superadmins) => {
      const messages = [];

      superadmins.forEach((superadmin) => {
        if (!superadmin.pushNotificationToken) {
          return;
        }

        messages.push({
          to: superadmin.pushNotificationToken,
          sound: 'default',
          title: `${salesSoFar} sales are made this month`,
          body: 'Daily Update',
        });
      });
      if (messages.length > 0) {
        sendNotifications(messages);
      }
    });
  });
});
