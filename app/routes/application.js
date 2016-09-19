import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.get('store').push({
      data: [
            {
                id: 1,
                type: 'check-item',
                attributes: {
                  title: 'Our business is webscale',
                  description: 'Scaling is easy, just as XDCR and naming things',
                  category: 'business',
                  checked: false,
                  tags: ['business', 'scaling']
                }
          },
          {
              id: 2,
              type: 'check-item',
              attributes: {
                title: 'Our team include old Wizard, Gnome, Elf and few Hobbits',
                description: 'Its dangeours to go alone!',
                category: 'business',
                checked: false,
                tags: ['team']
              }
          },
          {
              id: 3,
              type: 'check-item',
              attributes: {
                title: 'We use cloud for everything',
                description: 'Cloud office, cloud developers, cloud market shares',
                category: 'tech',
                checked: false,
                tags: ['cloud', 'business']
              }
          },
          {
              id: 4,
              type: 'check-item',
              attributes: {
                title: 'Release cycle? Do you mean we need to release eventually?',
                description: 'Than we will release this piece of nothing next year',
                category: 'tech',
                checked: false,
                tags: ['cloud', 'scaling']
              }
          }
      ]
    });
  }
});
