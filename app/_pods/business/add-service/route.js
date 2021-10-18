import Route from '@ember/routing/route';

import Changeset  from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import ProfileValidation from 'rate-me/validations/service';

export default class AddServiceRoute extends Route {

    model() {
        const company = this.modelFor('business')
        return this.store.createRecord('service', { company });
      }
    
      setupController(controller, model) {
        super.setupController(...arguments);
    
        let serviceChangeset = new Changeset(model, lookupValidator(ProfileValidation), ProfileValidation);
        controller.serviceChangeset = serviceChangeset;
      };
}
