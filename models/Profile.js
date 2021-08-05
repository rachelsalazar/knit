const mongoose = require('mongoose');
// const Schema = mongoose.Schema();


const ProfileSchema = new mongoose.Schema({
  // This profile is attached to a user, a unique key
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  location: {
    type: String,
    required: true
  },
  favoritePlant: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('profile', ProfileSchema);