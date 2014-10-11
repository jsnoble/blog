Router.configure({
  loadingTemplate: 'loading'
});

Router.map(function(){
  this.route('home', {path: '/'});
  this.route('blog', {layoutTemplate: 'layout',
  yieldTemplates: {
    'aside': {to: 'aside'},
    'footer': {to: 'footer'},
    'header': {to: 'header'}
  }});
  this.route('about', {layoutTemplate: 'layout'});
  this.route('postPage', {path: '/posts/:_id',
    data: function() { return Posts.findOne(this.params._id); }
  });
  this.route('postSubmit', {
    path: 'admin',
    data: function() { return Posts.findOne(this.params._id);}
  });
});

Router.onBeforeAction('loading');