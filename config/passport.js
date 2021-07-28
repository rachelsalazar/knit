// Using JWT tokens
const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// To grab the user from mongoose/MongoDB
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');

// Handing token to passport so passport can extract the payload
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(new jwtStrategy(options, (jwt_payload, done) => {
    console.log(jwt_payload);
  }));
}