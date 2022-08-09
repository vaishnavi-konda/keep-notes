const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 30,
  },

  password: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
});

module.exports = mongoose.model('User', userSchema);
