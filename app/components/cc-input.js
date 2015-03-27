import Ember from 'ember';
import Parser from '../utils/card-parser';

export default Ember.TextField.extend({
  classNameBindings: ["parser.isValidCard"],

  parser: Ember.computed(function() {
    return Parser.create();
  }),

  parseInput: Ember.observer('value', function() {
    this.set('parser.input', this.get('value'));
  }),

  formatOutput: Ember.observer('parser.formattedOutput', function() {
    this.set('value', this.get('parser.formattedOutput'));
  }).on("init"),

  setCreditCardType: Ember.observer('parser.type', function() {
    this.set('type', this.get('parser.type'));
  }),

  setNumber: Ember.observer("parser.validNumber", function() {
    this.set("number", this.get("parser.validNumber"));
  }).on("didInsertElement"),

  eventManager: {
    keyPress: function(e) {
      if (!String.fromCharCode(e.charCode).match(/\d/)) {
        e.preventDefault();
      }
    }
  }
});
