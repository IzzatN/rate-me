import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'

export default class Comments extends Component {
    @service store;
    @tracked comments = [];

    @tracked comment = '';

    @action
    fetchComments() {
        this.store.query('comment', { service_id: this.args.service.id }).then(comments => {
            this.comments = comments;
        });
    }

    @action
    async addComment() {
        let user = await this.store.findRecord('user', 1);
        let comment = this.store.createRecord('comment', { text: this.comment, service: this.args.service, user: user });

        await comment.save();
        this.comment = '';
        this.fetchComments();
    }

   // destroyRecord comment actioni
}
