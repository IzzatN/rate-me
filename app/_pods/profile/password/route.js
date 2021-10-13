import Route from '@ember/routing/route';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import ProfileValidation from 'rate-me/validations/profile-password';

export default class PasswordRoute extends Route {

    model() {
        return this.modelFor('profile');
    }

    setupController(controller, model) {
        super.setupController(...arguments);

        let userChangeset = new Changeset(model, lookupValidator(ProfileValidation), ProfileValidation);
        controller.userChangeset = userChangeset;
    };
}
