import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
  @service session;

  beforeModel() {
    this.get('session').prohibitAuthentication('main');
  }

  model() {
    return [];
  }
}
