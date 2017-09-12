

//My Articles-----------------------------------------------------
            


var MyArticleList = Backbone.Collection.extend({
   
    url: '/profiles/myarticle',
    model: MyArticle

});


var MyArticleView = Marionette.View.extend({

  el: '#container',

  events: {
    //"click .delete": "onDelete",
    "click .view" : "onView",
    "click .edit": "onEdit"
  }, 
    
  render: function(model) {
        $(".viewheader").html("My Articles<br>");
        $("#container").append("<div id='article_" + this.model.get('id') +"'></div>");        
        $('#article_' + this.model.get('id')).append("<h3>" + this.model.get('title') + "</h3>" + "<br>" + this.model.get('created_at') + 
        this.model.get('updated_at') + "<br>" + this.model.get('text') + "<br>");
        $('#article_' + this.model.get('id')).append("<button class='view btn-xs btn-primary' id=" + this.model.get("id") + ">View</button>"+"<button class='delete btn-xs btn-primary' onclick='art_article_delete(" + this.model.get('id') + ");' id=" + this.model.get("id") + ">Delete</button>"+"<hr>");
        


        return this;
  },

  onView: function(){

    var data;

    $.ajax({
      url: '/articles/' +  this.model.get('id'),
      dataType: 'json',
      async: true,
      success: function (data) {
        // console.log("Data fetched sucessfully");
        // console.log(data);

        $('.viewheader').empty();
        $('#container').empty();

        $('.viewheader').html("<h2><b>" + data.title + "<b></h2>");
        $("#container").append("<h5><i>Published at: " + data.created_at + "</i></h5>");
        $("#container").append("<h5><i>Updated at: " + data.updated_at + "</i></h5>");
        $("#container").append("<h4>" + data.text + "</h5>");

      },

      error: function(){
        // console.log(" Get article by ID error");
      }

    });

  },

  onEdit: function(ele){

    //console.log($(ele.currentTarget).attr('aid'));

    var t = new editArticleView();

    t.render($(ele.target).attr('aid'));

  }

});

//to delete my article
function art_article_delete(ele){
  $('#article_' + ele).remove();
  console.log("from article delete function");

  $.ajax({

    url: '/articles/' + ele,
    method: 'DELETE',
    dataType: 'json',
    async: true,

    success: function (data) {

      console.log('data');
    
    },

    error: function(e){

      console.log(e);

    } 

    });

}






var MyArticleListView = Marionette.View.extend({

      
    initialize: function() {
      var myarticlelist = new MyArticleList();

      myarticlelist.fetch({
        success: function (collection) {
          collection.each(function (model) {

            myarticleview = new MyArticleView({
              model: model
            });
            
            $('#my-articles').append(myarticleview.render().el);
          });
        }
      });
    },
 
    render: function() {
      return this;
    }
});

