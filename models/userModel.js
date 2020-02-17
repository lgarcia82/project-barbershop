const mongoose = require('mongoose');

module.exports = UserSchema = new mongoose.Schema(
  {
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    barberCard: String
  },
  {
    collection: 'users'
  }
);

module.exports = exports = mongoose.model('users', UserSchema);