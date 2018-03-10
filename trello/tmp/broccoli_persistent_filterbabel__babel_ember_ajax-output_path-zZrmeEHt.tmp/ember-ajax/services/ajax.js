define('ember-ajax/services/ajax', ['exports', 'ember-ajax/mixins/ajax-request'], function (exports, _ajaxRequest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { Service } = Ember;

  exports.default = Service.extend(_ajaxRequest.default);
});