import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service('current-user') currentUserService;

  beforeModel() {
    // return this.currentUserService.load(true).then((currentUser) => {
    //   if (!currentUser) {
    //     this.transitionTo('welcome');
    //   } else {
    //     this.transitionTo('main');
    //   }
    // });
  }
}
