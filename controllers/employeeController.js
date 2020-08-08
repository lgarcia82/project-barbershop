const Employee = require('../models/employeeModel');

exports.getAllEmployees = (req, res) => {
    Employee.find({}, function(err, employees) {
        if (err) {
          return res.status(500).json({
            message: 'Error getting employees.',
            error: err
          });
        }
      res.json(employees);
      });
}

exports.getEmployeeById = (req, res) => {
  Employee.findById(req.params.employeeId, function(err, employeee) {
      if (err) {
        return res.status(500).json({
          message:'Error getting employee by id.',
          error: err
        });
      }
      res.json(employeee);
  });
}

