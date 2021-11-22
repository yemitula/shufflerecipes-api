const mongoose = require('mongoose');

const User = mongoose.model('User',
  new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    roles: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role'
    }]
  })
);

module.exports = User;