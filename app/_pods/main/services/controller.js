import Controller from "@ember/controller";
import { inject as service } from '@ember/service';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';
import { oneWay } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';
import { restartableTask } from 'ember-concurrency';

let ServiceTableRowComponent = Ember.Component.extend({ 
  columns: 'tr',
});
export default class ServicesController extends Controller {
  @service store;

  queryParams = ['q'];

  q = null;

  perPage = 10;
  dir = 'asc';
  sort = null;

  @tracked page = 1;
  @tracked services = [];
  @tracked meta = null;

  @oneWay('fetchServices.isRunning') isLoading;

 

  columns = [
    {
      
      label: 'Name',
      valuePath: 'name',
      cellComponent: 'table/cell/truncate',
      sortable: false,
      width: '250px',

    },
    {
      label: 'Description',
      valuePath: 'description',
      cellComponent: 'table/cell/truncate',
      sortable: false
    },
    {
      label: 'Date',
      valuePath: 'updatedAt',
      cellComponent: 'table/cell/date',
      format: 'DD. MM. YYYY',
      sortable: false,
      width: '120px'
    }
  ];

  @restartableTask *fetchServices() {
    let query = this.getProperties(['page', 'sort', 'dir']);

    query.per_page = this.perPage;

    if (this.q) {
      query.query = this.q;
    }

    let records = yield this.store.query('service', query);

    // this.services = records;
    this.services.pushObjects(records.toArray());
    this.meta = records.meta;

    // this.canLoadMore = !isEmpty(records);
  };

  @action
  sortChange(isAscending, sort) {
    let dir = isAscending ? 'asc' : 'desc';
    this.setProperties({
      dir,
      sort
    });

    this.fetchServices.perform();
  };

  @action
  onScrolledToBottom() {
    if (this.meta.pages > this.page) {
      this.incrementProperty('page');
      this.fetchServices.perform();
    }
  }

  @action
  setPage(page) {
    let totalPages = this.meta.pages;
    let currPage = this.page;

    if (page < 1 || page > totalPages || page === currPage) {
      return;
    }

    this.page = page;
    this.services.clear();
    this.fetchServices.perform();
  }
}
