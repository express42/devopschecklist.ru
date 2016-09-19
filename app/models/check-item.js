import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    description: DS.attr(),
    checked: DS.attr(),
    tags: DS.attr(),
    category: DS.attr(),

    isBusiness: Ember.computed('category', function() {
        return this.get('category') === 'business';
    }),

    isTech: Ember.computed('category', function() {
        return this.get('category') === 'tech';
    }),
});
