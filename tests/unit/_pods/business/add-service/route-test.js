import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | business/add-service', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:business/add-service');
    assert.ok(route);
  });
});
