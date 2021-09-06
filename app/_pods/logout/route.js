import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RegisterRoute extends Route {
  @service session;

  redirect() {
    return this.session.invalidate().then(() => {
      return this.transitionTo('welcome');
    });
  }
};
