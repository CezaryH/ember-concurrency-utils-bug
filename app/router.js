import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import {timeout} from 'ember-power-select-error/utils';
import {task} from 'ember-concurrency';
import EmberObject from '@ember/object';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

const obj = EmberObject.extend({
  init() {
    this._super(...arguments);
    this.get('triggerTypingTask').perform();
  },
  triggerTypingTask: task(function* () {
    yield timeout(1000);
  }).restartable(),
})

Router.map(function() {
  obj.create()
});

export default Router;
