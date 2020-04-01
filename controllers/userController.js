const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    User.find({}, function(err, users) {
        if (err) {
          return res.status(500).json({
            message: 'Error when getting users.',
            error: err
          });
        }
      res.json(users);
      });
}
