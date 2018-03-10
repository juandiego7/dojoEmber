define('ember-concurrency/-evented-observable', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Object.extend({
    obj: null,
    eventName: null,

    subscribe(onNext) {
      let obj = this.obj;
      let eventName = this.eventName;
      obj.on(eventName, onNext);

      let isDisposed = false;
      return {
        dispose: () => {
          if (isDisposed) {
            return;
          }
          isDisposed = true;
          obj.off(eventName, onNext);
        }
      };
    }
  });
});