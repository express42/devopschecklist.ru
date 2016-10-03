import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    description: DS.attr(),
    checked: DS.attr(),
    tags: DS.attr(),
    category: DS.attr(),

    isAlignment: Ember.computed('category', function() {
        return this.get('category') === 'alignment';
    }),

    isContext: Ember.computed('category', function() {
        return this.get('category') === 'context';
    }),

    isLearning: Ember.computed('category', function() {
        return this.get('category') === 'learning';
    }),

    isLifecycle: Ember.computed('category', function() {
        return this.get('category') === 'lifecycle';
    }),

    isOrganization: Ember.computed('category', function() {
        return this.get('category') === 'organisation';
    }),

    isProcess: Ember.computed('category', function() {
        return this.get('category') === 'process';
    }),
});
