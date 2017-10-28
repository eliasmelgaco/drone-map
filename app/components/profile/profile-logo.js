import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  user: inject(),

  tagName: 'div',
  classNames: ['profile-logo'],

  hasShowingModal: false,

  actions: {
    toggleLogin() {
      this.toggleProperty('hasShowingModal');
    }
  }
});
