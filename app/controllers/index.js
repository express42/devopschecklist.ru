import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        calculateResult() {
            this.set('showResult', true);
        }
    }
});
