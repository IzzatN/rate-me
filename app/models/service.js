import Model, { attr, hasMany, belongsTo } from '@ember-data/model';
import { computed } from '@ember/object'

export default class ServiceModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @attr('date') updatedAt;
  @attr('string') rank;

  @computed('rank')
  get totalRank() {
    let num = parseFloat(this.rank);
    return Math.floor(num * 2) / 2;
  }

  @belongsTo() company;
  @hasMany() categories;
}
