import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile/profile-logo', 'Integration | Component | profile/profile logo', {
  integration: true
});

test('Modal not showing', function(assert) {
  assert.expect(1);

  this.render(hbs`{{profile/profile-logo}}`);

  assert.equal(
    this.$('.test-modal').length,
    0,
    'Modal not showing'
  );
});

test('Modal showing', function(assert) {
  assert.expect(1);

  this.set('hasShowingModal', true);

  this.render(hbs`{{profile/profile-logo hasShowingModal=hasShowingModal}}`);

  assert.equal(
    this.$('.test-modal').length,
    1,
    'Modal showing'
  );
});

test('Button show modal', function(assert) {
  assert.expect(2);

  this.render(hbs`{{profile/profile-logo}}`);

  assert.equal(
    this.$('.test-modal').length,
    0,
    'Modal not showing'
  );

  this.$('.test-btn-avatar').click();

  assert.equal(
    this.$('.test-modal').length,
    1,
    'Modal showing'
  );
});

// test('Action toggleLogin is triggered when element is clicked', function(assert) {
//   assert.expect(1);

//   this.set('toggleLogin', () => {
//     assert.ok(
//       true,
//       'Action was fired'
//     );
//   });

//   this.render(hbs`{{profile/profile-logo toggleLogin=(action toggleLogin)}}`);

//   this.$('.test-btn-avatar').click();
// });
