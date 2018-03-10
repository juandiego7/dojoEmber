import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('list');
    }
});

//se accede a los datos por un ORM
// cambiar el adaptador de los datos de api a local storage