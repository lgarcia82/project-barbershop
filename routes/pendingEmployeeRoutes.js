const express = require('express');
const router = express.Router();
const PendingEmployeeController = require('../controllers/pendingEmployeeController');

router.get('/', PendingEmployeeController.getPendingEmployees);

module.exports = router;