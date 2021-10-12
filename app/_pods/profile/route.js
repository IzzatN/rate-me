import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

import Changeset  from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import ProfileValidation from 'rate-me/validations/profile';

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

  setupController(controller, model) {
    super.setupController(...arguments);

    let userChangeset = new Changeset(model, lookupValidator(ProfileValidation), ProfileValidation);
    controller.userChangeset = userChangeset;
  };
}
