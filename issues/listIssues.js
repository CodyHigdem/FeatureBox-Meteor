if (Meteor.isClient) {
Template.listIssues.helpers({
  issues: function() {
    return Issues.find();
  },
  priorityHigh: function() {


    if (this.priority === 'High'){
      return true;
    }else{
      return false;
    }
  },
  priorityMedium: function() {
    if (this.priority === 'Medium'){
      return true;
    }else{
      return false;
    }
  },
  priorityLow: function() {
    if (this.priority === 'Low'){
      return true;
    }else{
      return false;
    }
  }
});
}