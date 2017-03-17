import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['check-item-ch'],
    actions: {
        toggleDescription() {
            this.toggleProperty('showDescription');
        },
        checkItemClicked(item) {
            if (item.get('checked')) {
                item.set('checked', false);
            } else {
                item.set('checked', true);
            }
        }
    }

});
