const express = require('express');
const bodyParser = require('body-parser');
const UserRoutes = require('./routes/userRoutes');

const app = express()
const PORT = process.env.PORT || 5000;

app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', UserRoutes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    require('./db');
  });


