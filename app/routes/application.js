import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend({
  user: inject(),

  init() {
    this._super(...arguments);
    
    get(this, 'user').setLanguage('en-US');
  }
});
