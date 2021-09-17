import Model, { attr, hasMany } from '@ember-data/model';
import { computed } from '@ember/object';

export default class UserModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') email;
  @attr('string') phone;
  @attr('string') photoUrl;
  @attr('string') password;
  @attr('string') token;
  @attr('boolean') isRegistered;

  @computed('firstName', 'lastName')
  get userName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @hasMany() comments;
  @hasMany() companies;
}
