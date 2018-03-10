define('trello/adapters/application', ['exports', 'ember-localstorage-adapter'], function (exports, _emberLocalstorageAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberLocalstorageAdapter.default.extend({
    //separar los datos de otras app 
    namespace: 'tallertrello'
  });
});