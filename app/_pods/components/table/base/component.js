import Component from '@ember/component';
import Table from 'ember-light-table';
import { computed, observer } from '@ember/object';
import { bool, sort } from '@ember/object/computed';

export default Component.extend({
  tagName: '',

  dir: 'asc',
  sort: '',
  meta: null,
  page: null,

  toggleRow(id, toggleTo) {
    let { selectedItems } = this;
    toggleTo = typeof toggleTo === 'boolean' ? toggleTo : !selectedItems.includes(id);
    if (toggleTo && !selectedItems.includes(id)) {
      selectedItems.pushObject(id);
    } else if (!toggleTo) {
      selectedItems.removeObject(id);
    }
    this.onSelectedChange();
    return toggleTo;
  },

  sortedModel: sort('model', 'sortBy'),

  sortBy: computed('dir', 'sort', 'defaultSort', function() {
    let defaultSort = this.defaultSort || [];
    return [`${this.sort}:${this.dir}`].concat(defaultSort);
  }),

  table: computed('sortedModel', function() {
    let rows = this.sortedModel;
    let columns = this.columns;

    let table = Table.create({ columns, rows });

    let { sort } = this;
    if (sort) {
      let sortColumn = table.allColumns.findBy('valuePath', sort);
      if (sortColumn) {
       sortColumn.set('sorted', true);
       sortColumn.set('ascending', this.dir === 'asc');
      }
    }

   return table
  }),

  sortedModelChange: observer('sortedModel.[]', 'table', function() {
    this.table.setRows(this.sortedModel);
    if (this.selectedItems) {
      this.onSelectedChange();
    }
  }),

  onSelectedChange() {
    let { selectedItems } = this;

    this.table.rows.forEach(function(row) {
      let isSelected = selectedItems.includes(row.content.id);
      row.set('selected', isSelected);
    });
  },

  actions: {
    toggleAll() {
      let toggleTo = !this.isAllSelected;
      this.model.forEach((param)=> this.toggleRow(param.id, toggleTo));
    },

    selectRow(row, e) {
      // e.preventDefault()
      e.stopPropagation();
      e.stopImmediatePropagation();

      let index1 = this.sortedModel.indexOf(row.content);
      let toggledBefore = this.lastCheckboxIndex !== -1 ?
        this.selectedItems.includes(this.sortedModel.objectAt(this.lastCheckboxIndex).id) : false;
      let toggleTo = this.toggleRow(row.content.id);

      if (e.shiftKey && this.lastCheckboxIndex !== -1 && index1 !== this.lastCheckboxIndex && toggleTo === toggledBefore) {
        let index2 = this.lastCheckboxIndex;
        let min = Math.min(index1, index2);
        let max = Math.max(index1, index2);
        for (let i = min; i < max; i++) {
          let content = this.sortedModel.objectAt(i);
          this.toggleRow(content.id, toggleTo);
        }
      }

      this.set('lastCheckboxIndex', index1);
    },

    onColumnClick(column) {
      if (column.sorted && this.sortChange) {
        this.sortChange(column.ascending, column.valuePath)
      }
    }
  }

});
