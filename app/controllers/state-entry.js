import Ember from 'ember';
import STATES from '../utils/states';

export default Ember.Controller.extend({
  selectedState: null,
  formatState: function(state) {
    return `${state.get("abbrev")}: ${state.get("name")}`;
  },

  allStates: Ember.computed(function() {
    return STATES;
  }),

  setSelectedState: Ember.observer("selectedState", function() {
    STATES.setEach("isHighlighted", false);
    STATES.setEach("isSelected", false);
    if(this.get("selectedState")) {
      this.get("selectedState").set("isSelected", true);
    }
  }),

  matchStates: function(query, callback) {
    callback(STATES.filter(function(state) {
      // Clear out when field is empty
      if (!query) {
        STATES.setEach("isHighlighted", false);
        STATES.setEach("isSelected", false);
        return;
      }
      var regex = new RegExp(query, 'i');

      if (regex.test(state.get("name")) || regex.test(state.get("abbrev"))) {
        state.set("isHighlighted", true);
        return true;
      } else {
        state.set("isHighlighted", false);
        return false;
      }
    }));
  },
  actions: {
    selectState: function(state) {
      this.set("selectedState", state);
    }
  }
});
