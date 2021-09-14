import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service'
import { action } from '@ember/object'
import { alias } from '@ember/object/computed';

export default class AddServiceController extends Controller {
  @service('current-user') currentUserService;
  @alias('currentUserService.user') currentUser;
  @service store;
  @tracked name;
  @tracked description;
  @tracked categoryName;
  @tracked services = [];

  @action
  async addService() {
    let company = await this.store.findRecord('company', this.currentUser.company.id);
    let service = this.store.createRecord('service', { name: this.name, description: this.description, company: company });

    await service.save();
    this.name = '';
    this.description = '';
  }
}
