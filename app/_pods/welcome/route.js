import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default class WelcomeRoute extends Route {
  @service('current-user') currentUserService;
  @alias('currentUserService.user') currentUser;

  setupController(controller) {
    super.setupController(...arguments);
    controller.currentUser = this.currentUser;
  }
}
