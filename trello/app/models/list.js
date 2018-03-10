import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    //hasMany que una list puede contener muchos item
    items: DS.hasMany("item")
});
