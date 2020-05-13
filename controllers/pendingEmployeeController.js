const PendingEmployee = require('../models/pendingEmployeeModel');

exports.getPendingEmployees = (req, res) =>{
    PendingEmployee.find({}, function(err, pendingEmployees) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting pending employees.',
          error: err
        });
      }
    res.json(pendingEmployees);
    });
  }