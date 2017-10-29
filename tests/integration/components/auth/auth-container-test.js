import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('auth/auth-container', 'Integration | Component | auth/auth container', {
  integration: true
});

test('Defaut render with login', function(assert) {
  assert.expect(1);

  this.set('hasSignup', false);

  this.render(hbs`{{auth/auth-container hasSignup=hasSignup}}`);

  assert.equal(
    this.$('.teste-social').length,
    1,
    'Login showing'
  );
});

test('Defaut render with signup', function(assert) {
  assert.expect(1);

  this.set('hasSignup', true);

  this.render(hbs`{{auth/auth-container hasSignup=hasSignup}}`);

  assert.equal(
    this.$('.test-signup').length,
    1,
    'Signup showing'
  );
});
