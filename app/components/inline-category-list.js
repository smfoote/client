import { sort } from '@ember/object/computed';
import { CompatComponent as Component } from 'ember-glimmer-component';

export default Component.extend({
  categorySorting: ['totalAddonCount:desc'],
  categoriesSortedByAddonCount: sort('categories', 'categorySorting')
});
