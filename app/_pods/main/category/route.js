import Route from '@ember/routing/route';

export default class CategorysRoute extends Route {
    model({ value }) {
        return this.store.queryRecord('category', { value }, { reload: true });
    }

    setupController(controller, model) {
        super.setupController(...arguments);
        controller.fetchServices.perform(model.id);
        controller.categoryName = model.name;
    }
}


