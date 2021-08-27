import SimpleAuthSessionService from 'ember-simple-auth/services/session';
import { inject as service } from '@ember/service';

export default class SessionService extends SimpleAuthSessionService {
  @service router;
  @service currentUser;
  handleAuthentication() {
    this.router.transitionTo('main');
    this.loadCurrentUser();
  }
  async loadCurrentUser() {
    try {
      const user = await this.currentUser.load();
      return user;
    } catch (err) {
      await this.session.invalidate();
    }
  }
}
