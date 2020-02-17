const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    User.find({_id:'5e4ad2a01c9d4400000032fa'}, function(err, users) {
        if (err) {
          return res.status(500).json({
            message: 'Error when getting users.',
            error: err
          });
        }
        return res.json(users);
      });
}
