import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['clever-input', 'Grid-cell'],
  attributeBindings: ['style'],

  classWhenActive: Ember.computed('value', function() {
    const classes = ['label-emphasized', 'fadeInUp'];
    return this.get('value.length') ? classes.join(' ') : '';
  })
});
