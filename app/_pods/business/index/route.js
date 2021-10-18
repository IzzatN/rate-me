import Route from '@ember/routing/route';


export default class BusinessIndexRoute extends Route {
    model() {
        return this.modelFor('business')

      }
}
