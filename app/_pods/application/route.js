import Route from '@ember/routing/route';
// import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { all } from 'rsvp';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
  @service('current-user') currentUserService;

  beforeModel() {
    return all([
        this.currentUserService.load(true)
      ]);
  }
};
