const mongoose = require('mongoose');
const config = require('./config')
mongoose.Promise = global.Promise;
const uri = config.db;

const connection = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

connection
    .then(db => {
        console.log(db);
        return db;
    }).catch(err => {
        console.log("ERROR UTIL/db.js", err);
    })

module.exports = connection;