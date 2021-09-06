import {
  validatePresence,
  validateLength,
  validateFormat,
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
  email: [
    validatePresence({ presence: true }),
    validateFormat({ type: 'email' })
  ],
  phone: [
    validatePresence({ presence: true })
  ],
  photoUrl: [
    validatePresence({ presence: true })
  ],
  password: [
    validatePresence({ presence: true }),
    validateLength({ min: 8 })
  ],
  passwordConfirmation: [
    validateConfirmation({ on: 'password' })
  ]
};
