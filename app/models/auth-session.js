import Model, { attr, belongsTo } from '@ember-data/model';

export default class SessionModel extends Model {
  @attr('string') token;
  @attr('string') email;
  @attr('string') password;

  @belongsTo() user;
}

