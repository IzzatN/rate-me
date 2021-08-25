import EmberRouter from '@ember/routing/router';
import config from 'rate-me/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('main', { path: '/' }, function() {
    this.route('category', { path: '/category/:value' });
    this.route('service', { path: '/service/:id' });
    this.route('company', { path: '/company/:id' });
  });

  this.route('business');
  // business ichiga service route yaratib, formani qo`shib template, name/description property, company, save
  this.route('welcome');
  this.route('login');
  this.route('logout');
});
