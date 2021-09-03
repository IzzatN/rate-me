import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service'
import { action } from '@ember/object'


export default class AddServiceController extends Controller {
    @service store;
    @tracked name;
    @tracked description;
    @tracked categoryName;
    @tracked services = [];

    // get comments() {
    //     return this.store.query('comment', { serviceId: this.serviceId });
    // }

    @action
    async addService() {
        let company = await this.store.findRecord('company', 1);
        let service = this.store.createRecord('service', { name: this.name, description: this.description, company: company });

        await service.save();
        this.name = '';
        this.description = '';
    }

}
