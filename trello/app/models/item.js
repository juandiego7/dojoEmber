import DS from 'ember-data';

export default DS.Model.extend({
    description: DS.attr("string"),
    //belongsTo  es decir que el item pertenece a una lista
    list: DS.belongsTo("list")
});
