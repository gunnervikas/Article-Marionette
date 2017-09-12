
// $(function() {
var Article = Backbone.Model.extend({

  defaults: {
    title: 'abc',
    created_at: 'Time',
    email: 'Email',  
    text: 'Text of the article'
  }
  
});


// Create a collection of Articles
var ArticleList = Backbone.Collection.extend({
    // url: "/api/album/1",
    url: '/articles',
    model: Article

});