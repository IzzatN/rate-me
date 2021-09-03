import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

export default class RegisterRoute extends Route {

    @tracked firstName;
    @tracked lastName;
    @tracked email;
    @tracked phone;
    @tracked photoUrl;

}
