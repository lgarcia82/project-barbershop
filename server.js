const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config')
const EmployeeRoutes = require('./routes/employeeRoutes');

const app = express()
const PORT = config.port || 5000;

app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/employees', EmployeeRoutes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    require('./db');
  });


