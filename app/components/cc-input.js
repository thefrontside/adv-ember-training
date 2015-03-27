import Ember from 'ember';

import { CardInputParser } from 'adv-training-helpers';

export default Ember.TextField.extend(CardInputParser, {
  classNameBindings: ["isValid"],
  isValid: Ember.computed.reads("parser.isValidCard"),
  eventManager: {
    keyPress: function(e) {
      if (!String.fromCharCode(e.charCode).match(/\d/)) {
        e.preventDefault();
      }
    }
  }
});
