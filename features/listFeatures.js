if (Meteor.isClient) {
Template.listFeatures.helpers({
  features: function() {
    return Features.find();
  },
  upvotedClass: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
      return 'btn-primary upvotable';
    }else {
      return 'disabled';
    }
  }
});


Template.listFeatures.events({
  'click .upvote': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});
}