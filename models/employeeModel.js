const mongoose = require('mongoose').set('debug', true);

const EmployeeSchema = new mongoose.Schema({
  name: String,
  bio: String,
  profilePic: String,
  schedule: String,
  status: String,
  services: Array
},
{
  collection: 'employees'
});

module.exports = exports = mongoose.model('employees', EmployeeSchema);