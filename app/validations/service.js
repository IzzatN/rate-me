import {
    validatePresence,
    validateLength,
  } from 'ember-changeset-validations/validators';
  
  export default {
    name: [
      validatePresence({ presence: true }),
      validateLength({ min: 3, max: 30})
    ],
    description: [
      validatePresence({ presence: true }),
      validateLength({ min: 10, max: 140})
    ],
    // phone: [
    //   validatePresence({ presence: true })
    // ],
    // photoUrl: [
    //   validatePresence({ presence: true })
    // ],
  };