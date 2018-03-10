define('ember-ajax/ajax-request', ['exports', 'ember-ajax/mixins/ajax-request'], function (exports, _ajaxRequest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { Object: EmberObject } = Ember;

  exports.default = EmberObject.extend(_ajaxRequest.default);
});