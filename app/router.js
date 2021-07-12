import EmberRouter from '@ember/routing/router';
import config from 'rate-me/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact', {path: '/getting-in-touch'});

  this.route('service', {path: '/service/:id'});
  this.route('categories', {path: '/categories/:slug'});
  this.route('welcome');
});