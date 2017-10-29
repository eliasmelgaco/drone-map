import Component from '@ember/component';
import { setProperties } from '@ember/object';

export default Component.extend({
  tagName: 'div',
  classNames: ['auth-container'],

  currentTabLogin: 'current-tab',
  currentTabSignup: '',
  hasSignup: false,

  actions: {
    toggleTabLogin() {
      setProperties(this, {
        currentTabLogin: 'current-tab',
        currentTabSignup: '',
        hasSignup: false
      })
    },
    toggleTabSignup() {
      setProperties(this, {
        currentTabLogin: '',
        currentTabSignup: 'current-tab',
        hasSignup: true
      })
    }
  }
});
