import Model, { attr, hasMany, belongsTo } from '@ember-data/model';
import { computed, set } from '@ember/object';


export default class UserModel extends Model {
    @attr('string') firstName;
    @attr('string') lastName;
    @attr('string') email;
    @attr('string') phone;
    @attr('string') photoUrl;

    @computed('firstName', 'lastName')
    get userName() {
        return `${this.firstName} ${this.lastName}`;
    }


    @hasMany() comments;
    @hasMany() companies;
}
