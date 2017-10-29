import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-frame', 'Integration | Component | app frame', {
  integration: true
});

test('Showing areas of interest', function(assert) {
  assert.expect(1);

  this.render(hbs`{{app-frame}}`);

  assert.equal(
    this.$('.test-areas-interest').text().trim(),
    'AREAS OF INTEREST',
    'AREAS OF INTEREST showing'
  );
});
