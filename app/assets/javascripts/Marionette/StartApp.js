
var App = Backbone.Marionette.Application.extend({
  onStart: function(app,options) {
    Backbone.history.start({pushState: true});
  },
});

cont = new mycontroller(); //From Marionette/controllers/Controller.js

var router = new AppRouter({controller: cont}); // From Marionette/routers/AppRouter.js

var app = new App();  // From Marionette/StartApp.js

  // The "app" dependency is passed in as "App"
  $(document).ready(function(){
    $("#cont").attr("style","padding-bottom:100px;");
    app.start();
    $('a').click(function(e){
        var t = $(e.target);
        Backbone.history.navigate(t.attr("data-url"), {trigger: true});
    })
  });
