const registerUser = require('./registerUser');
const loginUser = require('./loginUser');
const getAllUsers = require('./getAllUsers');
const getUsers = require('./getUsers');
const approveUser = require('./approveUser');
const deleteUser = require('./deleteUser');
const setPushNotificationToken = require('./setPushNotificationToken');

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUsers,
  approveUser,
  deleteUser,
  setPushNotificationToken,
};
