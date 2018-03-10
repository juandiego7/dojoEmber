define('trello/models/list', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        title: _emberData.default.attr('string'),
        //hasMany que una list puede contener muchos item
        items: _emberData.default.hasMany("item")
    });
});