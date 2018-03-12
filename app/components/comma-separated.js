import { computed } from '@ember/object';
import { CompatComponent as Component } from 'ember-glimmer-component';

export default Component.extend({
  separator: computed('list.lastObject', 'item', function() {
    if (this.get('list.lastObject') === this.get('item')) {
      return '';
    } else {
      return ', ';
    }
  })
});
