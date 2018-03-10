define('ember-ajax/mixins/ajax-support', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Mixin,
    inject: { service },
    computed: { alias }
  } = Ember;

  exports.default = Mixin.create({

    /**
     * The AJAX service to send requests through
     *
     * @property {AjaxService} ajaxService
     * @public
     */
    ajaxService: service('ajax'),

    /**
     * @property {string} host
     * @public
     */
    host: alias('ajaxService.host'),

    /**
     * @property {string} namespace
     * @public
     */
    namespace: alias('ajaxService.namespace'),

    /**
     * @property {object} headers
     * @public
     */
    headers: alias('ajaxService.headers'),

    ajax(url) {
      const augmentedOptions = this.ajaxOptions(...arguments);

      return this.get('ajaxService').request(url, augmentedOptions);
    }
  });
});