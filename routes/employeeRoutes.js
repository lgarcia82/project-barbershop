const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');

router.get('/', EmployeeController.getAllEmployees);
router.get('/:employeeId', EmployeeController.getEmployeeById);

module.exports = router;
