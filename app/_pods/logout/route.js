import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { later } from '@ember/runloop';

export default class RegisterRoute extends Route {
  @service session;

  redirect() {
    return this.session.invalidate().then(() => {
      later(() => {
        return this.transitionTo('welcome');
      }, 100);
    });
  }
};
