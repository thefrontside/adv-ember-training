import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("state-entry");
  this.route("card-entry");
  this.route("oneplaylist", function() {
    this.route("songs");
    this.route("playlist");
  });
});

export default Router;
