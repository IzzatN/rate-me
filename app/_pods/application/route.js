import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
  @service('current-user') currentUserService;

  beforeModel() {
    return this._loadCurrentUser();
  }

  async _loadCurrentUser() {
    await this.currentUserService.load();
  }
};
