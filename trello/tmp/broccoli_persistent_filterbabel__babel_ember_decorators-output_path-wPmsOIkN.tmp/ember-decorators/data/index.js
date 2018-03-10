define('ember-decorators/data/index', ['exports', 'ember-data', '@ember-decorators/utils/decorator-wrappers', '@ember-decorators/utils/decorator-macros'], function (exports, _emberData, _decoratorWrappers, _decoratorMacros) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.belongsTo = exports.hasMany = exports.attr = undefined;


  /**
   * Decorator that turns the property into an Ember Data attribute
   *
   * ```javascript
   * import Model from 'ember-data/model';
   * import { attr } from 'ember-decorators/data';
   *
   * export default Model.extend({
   *   @attr firstName: null
   * });
   * ```
   *
   * @function
   * @param {String} [type] - Type of the attribute
   */
  const attr = exports.attr = (0, _decoratorWrappers.decoratorWithParams)(function (target, key, desc, params) {
    return _emberData.default.attr(...params);
  });

  /**
   * Decorator that turns the property into an Ember Data `hasMany` relationship
   *
   * ```javascript
   * import Model from 'ember-data/model';
   * import { hasMany } from 'ember-decorators/data';
   *
   * export default Model.extend({
   *   @hasMany users: null
   * });
   * ```
   *
   * @function
   * @param {String} [type] - Type of the `hasMany` relationship
   */
  const hasMany = exports.hasMany = (0, _decoratorMacros.decoratorWithKeyReflection)(_emberData.default.hasMany);

  /**
   * Decorator that turns the property into an Ember Data `belongsTo` relationship
   *
   * ```javascript
   * import Model from 'ember-data/model';
   * import { belongsTo } from 'ember-decorators/data';
   *
   * export default Model.extend({
   *   @belongsTo user: null
   * });
   * ```
   * @function
   * @param {String} [type] - Type of the `belongsTo` relationship
   */
  const belongsTo = exports.belongsTo = (0, _decoratorMacros.decoratorWithKeyReflection)(_emberData.default.belongsTo);
});