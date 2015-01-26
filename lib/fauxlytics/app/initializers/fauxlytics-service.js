import fauxlytics from '../services/fauxlytics';

export default {
  name: 'fauxlytics-service',
  initialize: function initialize(container, application) {

    application.register('service:fauxlytics', fauxlytics, {instantiate: false});

    ['route', 'controller', 'component'].forEach(function(objectType) {
      application.inject(objectType, 'analytics', 'service:fauxlytics');
    });
  }
};
