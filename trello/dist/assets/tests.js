'use strict';

define('trello/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/trello-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/trello-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/trello-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/trello-list.js should pass ESLint\n\n14:13 - Use closure actions, unless you need bubbling (ember/closure-actions)');
  });

  QUnit.test('controllers/lists.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/lists.js should pass ESLint\n\n6:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('models/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/item.js should pass ESLint\n\n');
  });

  QUnit.test('models/list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/list.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/lists.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/lists.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
});
define('trello/tests/integration/components/trello-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | trello-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "wX7ntOaQ",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"trello-item\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "G7L2MZU3",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"trello-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('trello/tests/integration/components/trello-list-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | trello-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "UhE6mJCM",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"trello-list\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "OFPS1ymG",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"trello-list\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('trello/tests/test-helper', ['trello/app', 'trello/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('trello/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/trello-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/trello-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/trello-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/trello-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/lists-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/lists-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/lists-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/lists-test.js should pass ESLint\n\n');
  });
});
define('trello/tests/unit/controllers/lists-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | lists', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:lists');
      assert.ok(controller);
    });
  });
});
define('trello/tests/unit/models/item-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | item', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('item', {}));
      assert.ok(model);
    });
  });
});
define('trello/tests/unit/models/list-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('list', {}));
      assert.ok(model);
    });
  });
});
define('trello/tests/unit/routes/lists-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | lists', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:lists');
      assert.ok(route);
    });
  });
});
define('trello/config/environment', [], function() {
  var prefix = 'trello';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('trello/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
