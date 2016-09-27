//COLLECTIONS
//Issue
Issues = new Mongo.Collection('issues');

if (Meteor.isServer) {
  Issues.allow({
    insert: function (userId, doc) {
      return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },
    remove: function (userId, doc) {
      return true;
    }
  });
}

Issues.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 100
  },
  description: {
    type: String,
    label: "Description",
  },
  dueDate: {
    type: Date,
    label: "Due Date",
    autoform: {
      type: 'hidden',
      label: false
    },
    optional: true
  },
  priority: {
    type: String,
    label: "Priority",
    allowedValues: ['High', 'Medium', 'Low'],
    autoform: {
      type: 'hidden',
      label: false
    },
    optional: true
  },
  assigned: {
    type: Number,
    label: "assigned",
    autoform: {
      type: 'hidden',
      label: false
    },
    optional: true
  },
  status: {
    type: String,
    label: 'Status complete?',
    allowedValues: ['Complete', 'In Progress', 'Open'],
    autoform: {
      type: 'hidden',
      label: false
    },
    optional: true
  },
  createdAt: {
    type: Date,
    autoform:{
      type: 'hidden',
      label: false
    },
    autoValue: function(){
      return new Date();
    }
  },
  uid: {
    type: String,
    autoform:{
      type: 'hidden',
      label: false
    },
    autoValue: function(){
      return this.userId;
    },
    optional: true
  },
}));