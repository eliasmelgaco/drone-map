import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('auth/auth-content', 'Integration | Component | auth/auth content', {
  integration: true
});

test('Default render', function(assert) {
  assert.expect(1);

  this.setProperties({
    onCloseModal: () => {
      assert.ok(
        true,
        'Action was fired'
      );
    }
  });

  this.render(hbs`{{auth/auth-content
    onCloseModal=(action onCloseModal)
  }}`);

  this.$('.test-close').click();
});
