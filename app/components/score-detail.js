import { set } from '@ember/object';
import { Component } from 'ember-glimmer-component';

export default class extends Component {
  constructor() {
    super(...arguments);
    this.showExplanation = false;
  }

  toggleExplainScore() {
    set(this, 'showExplanation', !this.showExplanation);
  }
}
