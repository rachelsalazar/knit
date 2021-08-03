const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  // Will populate with any errors that occur
  let errors = {};

  // If data is empty, replace with empty string
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  // Validations for Login
  if (!validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = 'Password must be between 6 and 30 characters';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};
