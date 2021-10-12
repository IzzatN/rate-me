import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'


export default class ProfileController extends Controller {
    @service('current-user') currentUserService;
    @alias('currentUserService.user') currentUser;
    @service notifications;

    @tracked isMenuOpen = false;

    @action
    closeDropdownMenu() {
        this.isMenuOpen = false;
    }

    @action
    toggleDropdownMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }


  @action
  async save(e) {
    e.preventDefault();

    let { userChangeset } = this;

    try {
      await userChangeset.validate();

      if (!userChangeset.isValid) {
        this.notifications.error(
          'There were validation errors, please check the fields and try again.'
        );
        return false;
      }

      await userChangeset.save();

      this.notifications.success('Profile saved!');

    } catch (e) {
      console.error(e);
      this.notifications.error(
        `There was an error, please try again.`
      );
    }
  };
}
