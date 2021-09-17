import Route from '@ember/routing/route';

export default class MainIndexRoute extends Route {

  limit = 3;

  model() {
    return this.store.findAll('service');
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    let { limit } = this;

    controller.recentServices = this.store.query('service', { query: 'recent', limit } );
    controller.topServices = this.store.query('service', { query: 'top-ranked', limit } );
    controller.popularServices = this.store.query('service', { query: 'popular', limit });
  }
}
