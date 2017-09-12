
var AppRouter = Marionette.AppRouter.extend({

  appRoutes:{

  "articles": "viewArticles",
  "articles/:articleid": "viewArticleByID",
  "newarticle": "newArticle",
  "editarticle": "editArticle",
  "publishedarticles": "publishedArticles",
  "privatearticles": "privateArticles",
  "reviews": "Reviews",
  "publicreviewrequest": "publicReviewRequest",
  "privatereviewrequest": "privateReviewRequest",
  "accountinfo": "AccountInfo",
  "" : "home",
  "*others": "defaultRoute"

  }

});