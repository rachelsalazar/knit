const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  // Will populate with any errors that occur
  let errors = {};

  // If data is empty, replace with empty string
  data.location = !isEmpty(data.location) ? data.location : '';
  data.favoritePlant = !isEmpty(data.favoritePlant) ? data.favoritePlant : '';

  // Validations for Profile
  if (validator.isEmpty(data.location)) {
    errors.location = 'Location is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};