import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'

const AUTHENTICATOR = 'authenticator:credentials';

export default class RegisterController extends Controller {
  @service notifications;
  @service session;
  @service router;
  @service('current-user') currentUserService;
  @alias('currentUserService.user') currentUser;

  @action
  async register(e) {
    e.preventDefault();

    let { userChangeset } = this;

    userChangeset.set('isRegistered', true);

    try {
      await userChangeset.validate();

      if (!userChangeset.isValid) {
        this.notifications.error(
          'There were validation errors, please check the fields and try again.'
        );
        return false;
      }

      await userChangeset.save().then(user => {
        return this.session.authenticate(AUTHENTICATOR, user.email, user.password).then(()=> user);
      }).then(() => {
        let user = this.model;
        user.set('password');
        user.set('passwordConfirmation');
        user.set('token');
      })

      this.notifications.success('Registered successfully!');

      await this.currentUserService.load()
      this.router.transitionTo('profile');
    } catch (e) {
      console.error(e);
      this.notifications.error(
        `There was an error, please try again.`
      );
    }
  };
}

