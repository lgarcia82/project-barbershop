const mongoose = require('mongoose').set('debug', true);

const EmployeeSchema = new mongoose.Schema({
  profilePic: String,
  schedule: String,
  portfolio: String,
  location: String,
  status: String,
  servicesId: String
},
{
  collection: 'employees'
});

module.exports = exports = mongoose.model('employees', EmployeeSchema);