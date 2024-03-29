import EmberRouter from '@ember/routing/router';
import config from 'rate-me/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('main', { path: '/main' }, function () {
    this.route('category', { path: '/category/:value' });
    this.route('service', { path: '/service/:id' });
    this.route('company', { path: '/company/:id' });
    this.route('services');

  });

  this.route('business', function () {
    this.route('add-service');
  });

  this.route('profile', { path: '/profile' }, function () {
    this.route('password');
  });

  
  this.route('welcome', { path: '/' });

  this.route('login');
  this.route('logout');
  this.route('register');

  this.route('loading');
  this.route('password');
});
