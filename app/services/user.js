import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  i18n: inject(),

  email: null,
  logo: 'https://lh5.googleusercontent.com/-dMTcw5b2Yuo/AAAAAAAAAAI/AAAAAAAACTk/lZO3PtkqeqI/photo.jpg',
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