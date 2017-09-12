

//Article Model View
var ArticleView = Marionette.View.extend({

    events: {
      "click .delete": "onDelete",
      "click .view" : "onView"
    },

    onView: function(){
      router.navigate("/articles/" + this.model.get("id"), true);
      //Backbone.history.navigate("/articles/" + this.model.get("id"), true);
      // console.log("hi");
    },

    onDelete: function() {


      this.remove();

      this.model.destroy({
        success: function(){
         // console.log("success");
        },
        error: function(){
          //console.log("error");
        }

      });
      
    },
      
    
    render: function(model) {

      this.$el.append("<h3>" + this.model.get('title') + "</h3>");
      this.$el.append("<b><i>"+ this.model.get('created_at') + this.model.get('email') + "</></i>" );
      this.$el.append("<br>" + this.model.get('text') + "<br>" + "<br>" );
      this.$el.append("<button class='view btn-xs btn-primary' id=" + this.model.get("id") + ">View</button>" + "&nbsp;");
      this.$el.append("<button class='delete btn-xs btn-primary' id=" + this.model.get("id") + ">Delete</button>"+ "<hr>");

      return this;

    }
});

//Article model collection View
var ArticleListView = Marionette.CollectionView.extend({

      
    initialize: function() {
      var articleList = new ArticleList();
          // articles    = $(this.el).find('#articles')
          // articleView;

      articleList.fetch({
        success: function (collection) {
          collection.each(function (model) {

            articleView = new ArticleView({
              model: model
            });

            $(".viewheader").html("Articles");
            $('#container').append(articleView.render().el);
          });

        }
      });
    },
 
    // render: function() {
    //   return this;
    // }
});

//new ArticleListView();

//---------------(END)INDEX-PAGE-------------------------------


