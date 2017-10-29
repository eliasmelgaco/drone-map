import { moduleFor, test } from 'ember-qunit';
import Service from '@ember/service';

let StubI18n = Service.extend({
  i18n: {
    locale: ''
  }
});

moduleFor('service:user', 'Unit | Service | user', {
  beforeEach() {
    this.register('service:i18n', StubI18n);
    this.inject.service('i18n', { as: 'i18n' });
  }
});

test('setLanguage changes value of language', function(assert) {
  assert.expect(2);

  let service = this.subject();

  assert.equal(
    service.get('language'),
    null,
    'language inital value'
  );

  service.setLanguage('pt-br');

  assert.equal(
    service.get('language'),
    'pt-br',
    'language is changed after setLanguage'
  );
});

test('setLogo changes value of logo', function(assert) {
  assert.expect(2);

  let service = this.subject();

  assert.equal(
    service.get('logo'),
    null,
    'logo inital value'
  );

  service.setLogo('https://lh5.googleusercontent.com/-dMTcw5b2Yuo/AAAAAAAAAAI/AAAAAAAACTk/lZO3PtkqeqI/photo.jpg');

  assert.equal(
    service.get('logo'),
    'https://lh5.googleusercontent.com/-dMTcw5b2Yuo/AAAAAAAAAAI/AAAAAAAACTk/lZO3PtkqeqI/photo.jpg',
    'logo is changed after setLogo'
  );
});