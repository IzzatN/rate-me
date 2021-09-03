import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default class ProfileRoute extends Route {
  @service('current-user') currentUserService;
  @alias('currentUserService.user') currentUser;
  @service session;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  model() {
    return this.store.findRecord('user', this.currentUser.id);
  }
}
