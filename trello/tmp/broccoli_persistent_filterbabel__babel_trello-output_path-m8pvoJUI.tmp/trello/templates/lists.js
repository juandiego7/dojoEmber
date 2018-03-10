define("trello/templates/lists", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "w6mqqnwl", "block": "{\"symbols\":[\"list\"],\"statements\":[[6,\"div\"],[9,\"class\",\"lists-container\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"infinite-width lists \"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"            \"],[4,\"trello-list\",null,[[\"list\",\"action\"],[[19,1,[]],\"addItem\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[6,\"div\"],[9,\"class\",\"new-list\"],[7],[0,\"\\n             \"],[6,\"form\"],[3,\"action\",[[19,0,[]],\"create\"],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n             \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"form-control\",[20,[\"listTitle\"]],\"Nombre lista...\"]]],false],[0,\"\\n             \"],[1,[25,\"input\",null,[[\"class\",\"type\",\"value\"],[\"btn btn-success\",\"submit\",\"Crear Lista\"]]],false],[0,\"\\n             \"],[8],[0,\"\\n            \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "trello/templates/lists.hbs" } });
});