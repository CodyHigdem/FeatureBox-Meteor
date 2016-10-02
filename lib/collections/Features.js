//COLLECTIONS
//Feature

Features = new Mongo.Collection('features');

if (Meteor.isServer) {
  Features.allow({
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

Features.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Brief description of the feature you are proposing",
    max: 100
  },
  description: {
    type: String,
    label: "Give everyone a detailed explaination of the feature. List out a case study to make it really concrete."
  },
  commentsCount: {
    type: Number,
    autoform: {
      type: 'hidden',
      label: false
    },
    defaultValue: 0,
    optional: true
  },
  upvoters: {
    type: [String],
    autoform: {
      type: 'hidden',
      label: false,
    },
    optional: true,
  },
  votes: {
    type: Number,
    autoform: {
      type: 'hidden',
      label: false
    },
    defaultValue: 0
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


/*
* METHODS
*/

Meteor.methods({
  upvoteFeature: function(postId) {
    check(this.userId, String);
    check(postId, String);

    var post = Features.findOne(postId);
    if (!post)
      throw new Meteor.Error('invalid', 'Post not found');

    if (_.include(post.upvoters, this.userId))
      throw new Meteor.Error('invalid', 'Already upvoted this post');

    Features.update(post._id, {
      $addToSet: {upvoters: this.userId},
      $inc: {votes: 1}
    });
  }
});
