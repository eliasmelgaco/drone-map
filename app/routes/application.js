import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Route.extend({
  fastboot: inject(),
  isFastBoot: reads('fastboot.isFastBoot'),
});
