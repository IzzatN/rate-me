import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {

  redirect() {
    return this.get('session').invalidate().then(() => {
      return this.transitionTo('login');
    });
  }

});
