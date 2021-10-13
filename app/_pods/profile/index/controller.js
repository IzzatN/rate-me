import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'


export default class ProfileIndexController extends Controller {
    @service notifications;

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
