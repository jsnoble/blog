/**
 * Created by jared on 9/22/14.
 */
Meteor.publish("posts", function(){
  return Posts.find();
});