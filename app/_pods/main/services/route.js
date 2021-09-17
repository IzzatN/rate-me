import Route from '@ember/routing/route';
import { action } from '@ember/object'
import { next } from '@ember/runloop';

export default class ServiceListRoute extends Route {
  setupController(controller, model) {
    super.setupController(...arguments);

    controller.services.clear();
    controller.fetchServices.perform();
  }

  @action
  queryParamsDidChange(change) {
    if (this.controller) {
      next(()=> {
        this.controller.services.clear();
        this.controller.fetchServices.perform();
      })
    }
  }
}
