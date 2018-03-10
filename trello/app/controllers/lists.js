import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        create(){
            console.log(this.listTitle)

            var list = this.store.createRecord("list",{
                title: this.listTitle
             });
             // para almacenar la informacion de la lista 
            list.save();
        },

        addItem(description,list){
            //vamos a guardar el item
            var item = this.store.createRecord("item",{
                description:description
            });

            //promesa
            list.get("items").then( ()=>{
                list.get("items").addObject(item);
                item.save();
                list.save();

            })

            
        }
    }
});
