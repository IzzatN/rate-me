import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'
import { alias } from '@ember/object/computed';

export default class CategoriesList extends Component {
    @service('current-user') currentUserService;
    @alias('currentUserService.user') currentUser;
    @service store;

    @tracked categories = [];
    @tracked isExpanded = false;

    get
    sidebarHeight() {
        if (this.isExpanded) {
            return this.categories.length * 38;
        } else {
            return 38 * 3;
        }
    }


    @action
    fetchCategories() {
        this.store.findAll('category').then(categories => {
            this.categories = categories;
        });
    }

    @action toggleView() { this.isExpanded = !this.isExpanded }

}
