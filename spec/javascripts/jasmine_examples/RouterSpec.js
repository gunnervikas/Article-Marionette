/* Default Router */

describe("Routing::", function(){
  
  var router;
  var spyevent;

  beforeEach(function(){

    cont = new mycontroller();

    router = new AppRouter({controller: cont}); 

  });

  it("Default route should load 'articles' view", function(){
    expect(router.appRoutes[""]).toEqual('home');
  });

  it("articles route should load 'viewArticles' view", function(){
    expect(router.appRoutes["articles"]).toEqual('viewArticles');
  });

  it("viewArticle route should load 'viewArticleByID' view", function(){
    expect(router.appRoutes["articles/:articleid"]).toEqual('viewArticleByID');
  });

  it("new articles route should load 'newArticle' view", function(){
    expect(router.appRoutes["newarticle"]).toEqual('newArticle');
  });

  it("EditArticle should load 'editarticle' view", function(){
    expect(router.appRoutes["editarticle"]).toEqual('editArticle');
  });

  it("Published Article route should load 'publishedarticles' view", function(){
    expect(router.appRoutes["publishedarticles"]).toEqual('publishedArticles');
  });

  it("Private Article route should load 'privatearticles' view", function(){
    expect(router.appRoutes["privatearticles"]).toEqual('privateArticles');
  });

  it("account info route should load 'accountinfo' view", function(){
    expect(router.appRoutes["accountinfo"]).toEqual('AccountInfo');
  });

  it("defaultRoute route should load 'defaultRoute' view", function(){
    expect(router.appRoutes["*others"]).toEqual('defaultRoute');
  });

});

