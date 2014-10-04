Router.map(function(){
  this.route('home', {path: '/'});
  this.route('blog', {layoutTemplate: 'layout',
  yieldTemplates: {
    'aside': {to: 'aside'}
  }});
  this.route('about', {layoutTemplate: 'layout'});
});