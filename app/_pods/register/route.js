import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import RegisterValidation from 'rate-me/validations/register';

export default class RegisterRoute extends Route {
  @service session;

  model() {
    return this.store.createRecord('user');
  };

  beforeModel() {
    this.session.prohibitAuthentication('welcome');
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    let userChangeset = new Changeset(model, lookupValidator(RegisterValidation), RegisterValidation);
    controller.userChangeset = userChangeset;
  };
}
