
//------------------------------------------------------------------------------------

//Edit Article




var ArticleDescModel = Backbone.Model.extend({

  idAttribute: "id",

  urlRoot: '/articles'

});


var ArticleCollection = Backbone.Collection.extend({

    id: '',
    url: '/articles',
    model: ArticleDescModel,  

});


var editArticleModel = Backbone.Model.extend({

  urlRoot: '/articles',

  defaults: {

  },

  idAttribute: "id"

});

