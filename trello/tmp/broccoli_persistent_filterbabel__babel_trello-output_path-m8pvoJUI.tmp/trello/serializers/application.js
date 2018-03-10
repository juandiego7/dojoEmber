define('trello/serializers/application', ['exports', 'ember-localstorage-adapter'], function (exports, _emberLocalstorageAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberLocalstorageAdapter.LSSerializer.extend();
});