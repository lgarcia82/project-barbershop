const mongoose = require('mongoose').set('debug', true);

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