import Route from '@ember/routing/route';

export default class MainIndexRoute extends Route {

  model() {
    return this.store.findAll('service');
  }
}
