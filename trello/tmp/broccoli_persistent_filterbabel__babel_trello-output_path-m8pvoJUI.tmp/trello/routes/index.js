define("trello/routes/index", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        redirect: function () {
            //es distinto a un redireccionamiento solo es una transicion es singlepageApp
            this.transitionTo("lists");
        }

    });
});