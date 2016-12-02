import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    description: DS.attr(),
    checkItems: DS.hasMany("check-item"),
    checkedItems: Ember.computed.filterBy('checkItems', 'checked'),
    score: Ember.computed('checkedItems.[]', 'checkItems.[]', function(){
      const checkItemsCount = this.get('checkItems.length')

      if(!checkItemsCount) { return 0; }

      const checkedItemsCount = this.get('checkedItems.length') || 0

      return checkedItemsCount/checkItemsCount
    }),
    scorePercentage: Ember.computed('score', function(){
      const score = this.get('score')

      return Math.round(score*100)
    })
});
