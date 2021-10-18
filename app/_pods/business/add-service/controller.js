import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';


export default class AddServiceController extends Controller {
 
  @service notifications;
  @service router;

  @action
  async save(e) {
    e.preventDefault();

    let { serviceChangeset } = this;

    try {
      await serviceChangeset.validate();

      if (!serviceChangeset.isValid) {
        this.notifications.error(
          'There were validation errors, please check the fields and try again.'
        );
        return false;
      }

      await serviceChangeset.save();

      this.notifications.success('Profile saved!');
      this.router.transitionTo('business')

    } catch (e) {
      console.error(e);
      this.notifications.error(
        `There was an error, please try again.`
      );
    }
  };


}
