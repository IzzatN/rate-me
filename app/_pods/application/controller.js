import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default class ApplicationController extends Controller {
  @service('current-user') currentUserService;
  @alias('currentUserService.user') currentUser;
}

