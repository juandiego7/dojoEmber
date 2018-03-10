"use strict";

define('trello/adapters/application', ['exports', 'ember-localstorage-adapter'], function (exports, _emberLocalstorageAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberLocalstorageAdapter.default.extend({
    //separar los datos de otas app  
    namespace: 'tallertrello'
  });
});
define('trello/adapters/ls-adapter', ['exports', 'ember-localstorage-adapter/adapters/ls-adapter'], function (exports, _lsAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _lsAdapter.default;
});
define('trello/app', ['exports', 'trello/resolver', 'ember-load-initializers', 'trello/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('trello/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('trello/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('trello/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('trello/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('trello/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('trello/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('trello/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('trello/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('trello/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('trello/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('trello/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('trello/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('trello/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('trello/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('trello/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('trello/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('trello/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('trello/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('trello/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('trello/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('trello/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('trello/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('trello/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('trello/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('trello/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('trello/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('trello/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('trello/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('trello/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('trello/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('trello/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('trello/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('trello/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('trello/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('trello/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('trello/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('trello/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('trello/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('trello/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('trello/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('trello/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('trello/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('trello/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('trello/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('trello/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('trello/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('trello/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('trello/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('trello/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('trello/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('trello/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('trello/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('trello/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('trello/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('trello/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('trello/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('trello/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('trello/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('trello/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('trello/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('trello/components/trello-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('trello/components/trello-list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        actions: {
            delete() {
                this.$().slideUp('normal', () => {
                    this.list.deleteRecord();
                    this.list.save();
                });
            },
            addItem() {
                // no podemos usar store
                // entonces se envia la accion usando borbujas primero al controlador y si no responde a las rutas
                this.sendAction('action', this.itemDescription, this.list);
            },
            hideForm() {
                this.$(".form-hide").hide();
            },
            showForm() {
                this.$(".form-hide").show();
            }

        }
    });
});
define('trello/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define("trello/controllers/lists", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        actions: {
            create() {
                console.log(this.listTitle);

                var list = this.store.createRecord("list", {
                    title: this.listTitle
                });
                // para almacenar la informacion de la lista 
                list.save();
            },

            addItem(description, list) {
                //vamos a guardar el item
                var item = this.store.createRecord("item", {
                    description: description
                });

                //promesa
                list.get("items").then(() => {
                    list.get("items").addObject(item);
                    item.save();
                    list.save();
                });
            }
        }
    });
});
define('trello/helpers/app-version', ['exports', 'trello/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;


  const {
    APP: {
      version
    }
  } = _environment.default;

  function appVersion(_, hash = {}) {
    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('trello/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('trello/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('trello/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
  Object.defineProperty(exports, 'cancelAll', {
    enumerable: true,
    get: function () {
      return _cancelAll.cancelAll;
    }
  });
});
define('trello/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
  Object.defineProperty(exports, 'perform', {
    enumerable: true,
    get: function () {
      return _perform.perform;
    }
  });
});
define('trello/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('trello/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('trello/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
  Object.defineProperty(exports, 'task', {
    enumerable: true,
    get: function () {
      return _task.task;
    }
  });
});
define('trello/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'trello/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('trello/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('trello/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.initialize;
    }
  });
});
define('trello/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('trello/initializers/export-application-global', ['exports', 'trello/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('trello/initializers/load-bootstrap-config', ['exports', 'trello/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize
  };
});
define("trello/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
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
define('trello/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('trello/router', ['exports', 'trello/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('lists');
  });

  exports.default = Router;
});
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
define('trello/routes/lists', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model() {
            return this.store.findAll('list');
        }
    });
});
define('trello/serializers/application', ['exports', 'ember-localstorage-adapter'], function (exports, _emberLocalstorageAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberLocalstorageAdapter.LSSerializer.extend();
});
define('trello/serializers/ls-serializer', ['exports', 'ember-localstorage-adapter/serializers/ls-serializer'], function (exports, _lsSerializer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _lsSerializer.default;
});
define('trello/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("trello/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3swj0ls5", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[9,\"class\",\"title text-center\"],[7],[0,\"DojoEmber\"],[8],[0,\"\\n\"],[6,\"br\"],[7],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "trello/templates/application.hbs" } });
});
define('trello/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("trello/templates/components/trello-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HTdU7voO", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"card\"],[7],[0,\"\\n    \"],[1,[20,[\"item\",\"description\"]],false],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "trello/templates/components/trello-item.hbs" } });
});
define("trello/templates/components/trello-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hMr0mMFI", "block": "{\"symbols\":[\"item\"],\"statements\":[[6,\"div\"],[9,\"class\",\"list\"],[7],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-xs-10\"],[7],[0,\"\\n            \"],[6,\"h2\"],[9,\"class\",\"titles_list\"],[7],[1,[20,[\"list\",\"title\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-xs-2\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"class\",\"btn btn-link glyphicon glyphicon-plus\"],[3,\"action\",[[19,0,[]],\"showForm\"]],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"todos\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-hide\"],[7],[0,\"\\n            \"],[6,\"form\"],[3,\"action\",[[19,0,[]],\"addItem\"],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n                \"],[1,[25,\"textarea\",null,[[\"class\",\"value\"],[\"form-control\",[20,[\"itemDescription\"]]]]],false],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"actions\"],[7],[0,\"\\n                    \"],[6,\"button\"],[9,\"class\",\"btn btn-success\"],[7],[0,\"Añadir\"],[8],[0,\"\\n                    \"],[6,\"button\"],[9,\"class\",\"btn btn-link glyphicon glyphicon-remove\"],[3,\"action\",[[19,0,[]],\"hideForm\"]],[7],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n\\n        \"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"list\",\"items\"]]],null,{\"statements\":[[0,\"                \"],[4,\"trello-item\",null,[[\"item\"],[[19,1,[]]]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"actions  text-center\"],[7],[0,\"\\n    \"],[6,\"button\"],[9,\"class\",\"btn btn-danger\"],[3,\"action\",[[19,0,[]],\"delete\"]],[7],[0,\"\\n        Eliminar Lista\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "trello/templates/components/trello-list.hbs" } });
});
define("trello/templates/lists", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "w6mqqnwl", "block": "{\"symbols\":[\"list\"],\"statements\":[[6,\"div\"],[9,\"class\",\"lists-container\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"infinite-width lists \"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"            \"],[4,\"trello-list\",null,[[\"list\",\"action\"],[[19,1,[]],\"addItem\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[6,\"div\"],[9,\"class\",\"new-list\"],[7],[0,\"\\n             \"],[6,\"form\"],[3,\"action\",[[19,0,[]],\"create\"],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n             \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"form-control\",[20,[\"listTitle\"]],\"Nombre lista...\"]]],false],[0,\"\\n             \"],[1,[25,\"input\",null,[[\"class\",\"type\",\"value\"],[\"btn btn-success\",\"submit\",\"Crear Lista\"]]],false],[0,\"\\n             \"],[8],[0,\"\\n            \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "trello/templates/lists.hbs" } });
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

if (!runningTests) {
  require("trello/app")["default"].create({"name":"trello","version":"0.0.0+84b52f95"});
}
//# sourceMappingURL=trello.map
