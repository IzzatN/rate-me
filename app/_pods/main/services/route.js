import Route from '@ember/routing/route';

export default class ServiceListRoute extends Route {
    queryParams = {
        q: {
            refreshModel: true
        }
    };

    model({q}) {
        return this.store.findAll('service').then(services => {
            if (q === 'recent') {
                return services.sortBy('updatedAt').reverse();
            } else {
                return services;
            }
        })

        // return this.store.query('service', { q });
    }
}
