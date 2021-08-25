import Authenticator from 'ember-simple-auth/authenticators/base';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';

export default Authenticator.extend({
  store: service(),

  authenticate(email, password) {
    let authSession = this.get('store').createRecord('auth-session', {
      email,
      password
    });

    return authSession.save().then(() => {
      // don't expose password in console/inspector
      authSession.set('password', null);

      return {
        token: authSession.get('token'),
        sessionId: authSession.get('id'),
        userId: authSession.get('user.id')
      };
    });
  },

  restore(data) {
    // verify session
    return this.get('store')
      .query('auth-session', { token: data.token })
      .then((authSessions) => {
        if (isEmpty(authSessions)) {
          throw new Error('invalid session token');
        }

        // sessions is still valid
        return data;
      })
  }
})
