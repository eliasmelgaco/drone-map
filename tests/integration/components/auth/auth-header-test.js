import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('auth/auth-header', 'Integration | Component | auth/auth header', {
  integration: true
});

test('Showing text', function(assert) {
  assert.expect(1);

  this.render(hbs`{{auth/auth-header}}`);

  assert.equal(
    this.$('.test-text').text().trim(),
    'DRONE MAP',
    'Text showing'
  );
});
