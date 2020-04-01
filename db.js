const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const uri = `mongodb+srv://jgarcia:DJfpHi1eg27TUOAg@cluster0-wlsen.mongodb.net/project-barbershop?retryWrites=true&w=majority`;

const connection = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

connection
    .then(db => {
        console.log(db);
        return db;
    }).catch(err => {
        console.log("ERROR UTIL/db.js", err);
    })

module.exports = connection;