import Model, { attr, hasMany, belongsTo } from '@ember-data/model';
import { computed } from '@ember/object'

export default class ServiceModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @attr('date') updatedAt;
  @attr('string') rank;

  @belongsTo() company;
  @hasMany() categories;
}
