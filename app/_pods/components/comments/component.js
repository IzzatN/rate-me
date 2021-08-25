import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'
import { alias } from '@ember/object/computed';

export default class Comments extends Component {
    @service('current-user') currentUserService;
    @alias('currentUserService.user') currentUser;
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
        let comment = this.store.createRecord('comment', { text: this.comment, service: this.args.service, user: this.currentUser });

        await comment.save();
        this.comment = '';
        this.fetchComments();
    }

   // destroyRecord comment actioni
}
