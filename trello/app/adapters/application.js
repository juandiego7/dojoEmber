import LSAdapter from 'ember-localstorage-adapter';

export default LSAdapter.extend({
  //separar los datos de otras app 
  namespace: 'tallertrello'
});