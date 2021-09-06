import Route from '@ember/routing/route';

import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import RegisterValidation from 'rate-me/validations/register';

export default class RegisterRoute extends Route {
  model() {
    return this.store.createRecord('user');
  };

  setupController(controller, model) {
    super.setupController(...arguments);

    let userChangeset = new Changeset(model, lookupValidator(RegisterValidation), RegisterValidation);
    controller.userChangeset = userChangeset;
  };
}
