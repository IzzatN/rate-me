import EmberRouter from '@ember/routing/router';
import config from 'rate-me/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('main', { path: '/' }, function() {
    this.route('services', { path: '/:value' });
    this.route('service');
    // this.route('service', { path: '/service/:id' });
  });

  this.route('welcome');
});
