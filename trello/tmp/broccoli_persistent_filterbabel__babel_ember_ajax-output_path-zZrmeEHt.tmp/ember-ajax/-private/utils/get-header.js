define('ember-ajax/-private/utils/get-header', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getHeader;


  const { A, isNone } = Ember;

  /**
   * Do a case-insensitive lookup of an HTTP header
   *
   * @function getHeader
   * @private
   * @param {Object} headers
   * @param {string} name
   * @return {string}
   */
  function getHeader(headers, name) {
    if (isNone(headers) || isNone(name)) {
      return; // ask for nothing, get nothing.
    }

    const matchedKey = A(Object.keys(headers)).find(key => {
      return key.toLowerCase() === name.toLowerCase();
    });

    return headers[matchedKey];
  }
});