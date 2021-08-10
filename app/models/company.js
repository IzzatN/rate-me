import Model, { attr, hasMany, belongsTo } from '@ember-data/model';
import { computed } from '@ember/object'

export default class CompanyModel extends Model {
  @attr('string') name;
  @attr('string') shortName;
  @attr('string') description;
  @attr('string') logoUrl;
  @attr('string') address;
  @attr('string') backgroundImgUrl;
  @attr('string') contactPhone;
  @attr('string') email;
  @attr('boolean') isBranch;

  

  @hasMany() services;
  @hasMany('company') branches;
  @belongsTo('company', {
    inverse: 'parent'
  }) parent;
}
