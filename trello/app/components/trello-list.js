import Component from '@ember/component';

export default Component.extend({
    actions:{
        delete(){
            this.$().slideUp('normal',() => {
                this.list.deleteRecord();
                this.list.save();
            });
        },
        addItem(){
            // no podemos usar store
            // entonces se envia la accion usando borbujas primero al controlador y si no responde a las rutas
            this.sendAction('action',this.itemDescription, this.list);
        },
        //ocultar
        hideForm(){
            this.$(".form-hide").hide();
        },
        //mostrar
        showForm(){
            this.$(".form-hide").show();
        },
    }
});
