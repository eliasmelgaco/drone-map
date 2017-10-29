import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  i18n: inject(),

  email: null,
  logo: null,
  location: {
    lat: null,
    lng: null
  },
  language: null,

  setLanguage(language) {
    this.set('language', language);
    this.set('i18n.locale', language);
  },

  setLogo(logo) {
    this.set('logo', logo);
  }
});