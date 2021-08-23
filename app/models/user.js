import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
    @attr('string') firstName;
    @attr('string') lastName;
    @attr('string') email;
    @attr('string') phone;
    @attr('string') photoUrl;



    @hasMany() comments;
}