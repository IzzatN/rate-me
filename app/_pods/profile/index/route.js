import Route from '@ember/routing/route';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import ProfileValidation from 'rate-me/validations/profile';

export default class ProfileIndexRoute extends Route {

    model() {
        return this.modelFor('profile');
    }

    setupController(controller, model) {
        super.setupController(...arguments);

        let userChangeset = new Changeset(model, lookupValidator(ProfileValidation), ProfileValidation);
        controller.userChangeset = userChangeset;
    };
}
