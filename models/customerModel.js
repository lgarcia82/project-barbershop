const mongoose = require('mongoose').set('debug', true);

const CustomerSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    employeeCardId: String,
    roleId: String
  },
  {
    collection: 'customers'
  });

  module.exports = exports = mongoose.model('customers', CustomerSchema);