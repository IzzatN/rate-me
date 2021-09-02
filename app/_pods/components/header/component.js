import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'
import { alias } from '@ember/object/computed';

export default class Comments extends Component {
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
