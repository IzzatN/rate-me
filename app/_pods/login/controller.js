import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service session;
  @service('current-user') currentUserService;

  @tracked errorMessage;

  @action
  updateIdentification(e) {
    this.identification = e.target.value;
  }

  @action
  updatePassword(e) {
    this.password = e.target.value;
  }

  @action
  async authenticate(e) {
    e.preventDefault();
    let { identification, password } = this;
    try {
      await this.session.authenticate(
        'authenticator:credentials',
        identification,
        password
      );

      this.currentUserService.load(true);
    } catch (error) {
      this.errorMessage = error.errors[0].detail || error;
    }

    if (this.session.isAuthenticated) {
      this.transitionToRoute('main');
    }
  }
}

