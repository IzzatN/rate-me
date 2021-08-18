import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'

export default class Comments extends Component {
    @service store;
    @tracked comments = [];

    @action
    fetchComments() {
        this.store.query('comment', { service_id: this.args.serviceId }).then(comments => {
            this.comments = comments;
        });
    }
}