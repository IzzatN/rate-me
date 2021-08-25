import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import RSVP from 'rsvp';

export default Service.extend({
  session: service(),
  store: service(),

  load(reload = false) {
    return RSVP.resolve().then(() => {
      let user = this.get('user');
      if (user) {
        this.identifyFullstoryUser(user);

        if (reload) {
          return user.reload();
        }
        return user;
      }

      let userId = this.get('session.data.authenticated.userId');
      if (userId) {
        return this.store.find('user', userId).then((user) => {
          this.set('user', user);
          this.identifyFullstoryUser(user);
          return user;
        });
      }

      return null;
    });
  },

  identifyFullstoryUser(user) {
    if (window.FS) {
      window.FS.identify(user.id, {
        displayName: user.name,
        email: user.email
      });
    }
  },

  isLoggedIn: alias('session.isAuthenticated')
});
