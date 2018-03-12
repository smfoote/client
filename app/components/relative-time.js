import { computed } from '@ember/object';
import { CompatComponent as Component } from 'ember-glimmer-component';

export default Component.extend({
  attributeBindings: ['isoDate:datetime', 'isoDate:title'],

  date: null,
  isoDate: computed('date', function() {
    let date = this.get('date');
    return date ? date.toISOString() : null;
  })
});
