import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'

export default class Comments extends Component {
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
