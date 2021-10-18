import {
    validateLength,
    validateConfirmation
  } from 'ember-changeset-validations/validators';
  
  export default {
  
    password: [
      validateLength({ allowBlank: true, min: 8 })
    ],
    passwordConfirmation: [
      validateConfirmation({ on: 'password' })
    ]
  };