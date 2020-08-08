const mongoose = require('mongoose').set('debug', true);

const PendingEmployeeSchema = new mongoose.Schema({
  employeeId: String
},
{
  collection: 'pendingEmployees'
});

module.exports = exports = mongoose.model('pendingEmployees', PendingEmployeeSchema);