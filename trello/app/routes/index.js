import Route from '@ember/routing/route';

export default Route.extend({
    redirect: function(){
        //es distinto a un redireccionamiento solo es una transicion es singlepageApp
        this.transitionTo("lists");
    }
    
});