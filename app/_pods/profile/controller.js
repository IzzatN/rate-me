import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'


export default class ProfileController extends Controller {
    @service('current-user') currentUserService;
    @alias('currentUserService.user') currentUser;

    @tracked isMenuOpen = false;

    @action
    closeDropdownMenu() {
        this.isMenuOpen = false;
    }

    @action
    toggleDropdownMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
