import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CurrentUserService extends Service {
  @service store;
  @service session;
  @tracked userId = null;

  async load() {
    const userId = this.session.data.authenticated.userId;
    this.userId = userId;

    if (userId) {
      this.user = await this.store.findRecord('user', userId);
    }
  }
}
