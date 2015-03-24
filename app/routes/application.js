import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition: function() {
      this.analytics.reportEvent({
        type: 'pageView',
        location: window.location.href
      });
    }
  }
});
