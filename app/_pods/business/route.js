import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default class BusinessRoute extends Route {
  @service('current-user') currentUserService;
  @alias('currentUserService.user') currentUser;
  @service session;

  model() {
    return this.store.findRecord('company', this.currentUser.companies.firstObject.id);
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    // let userChangeset = new Changeset(model, lookupValidator(ProfileValidation), ProfileValidation);
    // controller.userChangeset = userChangeset;
  };
}