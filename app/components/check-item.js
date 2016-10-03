import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['check-item-ch'],
    actions: {
        toggleDescription() {
            this.toggleProperty('showDescription');
        }
    }
});
