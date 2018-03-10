define('ember-localstorage-adapter/index', ['exports', 'ember-localstorage-adapter/adapters/ls-adapter', 'ember-localstorage-adapter/serializers/ls-serializer'], function (exports, _emberLocalstorageAdapterAdaptersLsAdapter, _emberLocalstorageAdapterSerializersLsSerializer) {
  exports.LSAdapter = _emberLocalstorageAdapterAdaptersLsAdapter['default'];
  exports.LSSerializer = _emberLocalstorageAdapterSerializersLsSerializer['default'];
  exports['default'] = _emberLocalstorageAdapterAdaptersLsAdapter['default'];
});