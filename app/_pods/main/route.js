import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MainRoute extends Route {
  @service session;

  // beforeModel(transition) {
  //   this.session.requireAuthentication(transition, 'login');
  // }

  // model() {
  //   return this.store.findAll('category');
  // }
}
