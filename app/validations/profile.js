import {
    validatePresence,
    validateLength,
    validateConfirmation
  } from 'ember-changeset-validations/validators';
  
  export default {
    firstName: [
      validatePresence({ presence: true }),
      validateLength({ min: 3 })
    ],
    lastName: [
      validatePresence({ presence: true }),
      validateLength({ min: 3 })
    ],
    phone: [
      validatePresence({ presence: true })
    ],
    // photoUrl: [
    //   validatePresence({ presence: true })
    // ],
    password: [
      validateLength({ allowBlank: true, min: 8 })
    ],
    passwordConfirmation: [
      validateConfirmation({ on: 'password' })
    ]
  };