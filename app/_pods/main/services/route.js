import Route from '@ember/routing/route';

export default class ServiceListRoute extends Route {
    queryParams = {
        q: {
            refreshModel: true
        }
    };

    model({ q }) {
        // return this.store.query('service', { query: q });
    }

    setupController(controller, model) {
        super.setupController(...arguments);
        this.controller.fetchServices.perform();
    }
}
