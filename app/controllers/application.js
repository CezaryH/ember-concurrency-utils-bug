import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.get('triggerTypingTask').perform();
  },
  triggerTypingTask: task(function* () {
    yield timeout(1000);
  }).restartable(),
 actions: {
   foo() { }
 }
});
