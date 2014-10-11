Meteor.publish('posts', function(sort, limit) {
  return Posts.find({}, {sort: sort, limit: limit});
});
Meteor.publish('singlePost', function(id) {
  return id && Posts.find(id);
});