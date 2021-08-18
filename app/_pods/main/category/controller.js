import Controller from '@ember/controller';
import { restartableTask } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service'

export default class CategoryController extends Controller {
    @service store;
    @tracked categoryName;
    @tracked services = [];

    // get comments() {
    //     return this.store.query('comment', { serviceId: this.serviceId });
    // }

    @restartableTask *fetchServices(id) {
        let query = {};
        this.services = [];

        query.category_id = id;

        let result = yield this.store.query('service', query);

        return this.services = result;
    }
}
