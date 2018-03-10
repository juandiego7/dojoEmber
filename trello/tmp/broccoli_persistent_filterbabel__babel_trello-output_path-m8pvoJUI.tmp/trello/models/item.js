define("trello/models/item", ["exports", "ember-data"], function (exports, _emberData) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        description: _emberData.default.attr("string"),
        //belongsTo  es decir que el item pertenece a una lista
        list: _emberData.default.belongsTo("list")
    });
});