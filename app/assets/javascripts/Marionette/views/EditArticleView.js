
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


var Adata;
var articleid;
var str;
var textdata;
var editArticleView = Marionette.View.extend({

  // el: '.edit-article',

  model: editArticleModel,

  events: {
   
    "click .CreateSubmit" : "onSubmit"
  },


  initialize: function (options) {

        this.art = new ArticleCollection();
        this.art.id = 36;
        this.art.fetch();
        articleid = this.art.id;
        //this.render(this.art.id);
  },

  render: function(artid){

    //this.$el.empty();
    //console.log(this.$el);

    $.ajax({
      url: '/articles/'+ artid +'/edit/',
      dataType: 'json',
      async: false,
      success: function (data) {
        str = data.title
        textdata = data.text        
      },
      error: function(e){
        console.log("Ajax Error");
      } });


    $(".viewheader").html("<h3><b>Edit Article</b></h3>");
    // $("#new-article").append(
    $("#container").html(

        //"<label>Public:</label>&nbsp" + "<input type='radio' id='visibility-true' name='visibility' value='false' class='form-group' class='control-label'" +
        //"<br><label>Private:</label>&nbsp" + "<input type='radio' id='visibility-false' name='visibility'  class='form-group class='control-label'<br>" +
        "<br><h4><label>Title</label></h4>" + 
        "<input type='text' id='art-title' value='" + str + "' placeholder='Minimum 5 Characters' class='form-control'><br>" +
        "<label><b><h4>Description</h4></b></label>" + 
        "<textarea class='form-control' id='art-text' placeholder='Minimum 20 Characters'>"+ textdata +"</textarea><br>"+"<button class='CreateSubmit onclick='art_update(" + this.model.get('id') + ");' btn btn-success'>Submit Article</button><hr>");
      


    return this;
  },

  onSubmit: function(){

  console.log("on render function");
  editarticlemodel = new editArticleModel();
  editarticlemodel.set({ id: articleid, visibility: 'true', title: $('#art-title').val(), text: $("#art-text").val()});
  console.log(editarticlemodel); 
  console.log("Attempting to save");
  editarticlemodel.save({},{
    success: function(model, response, options)
    {

      //console.log("Article Saved.");
      
      // router.navigate("#qfeed");
      // window.location.reload();
      // Backbone.history.loadUrl();
      
    },
    error: function(model,xhr,options)
    {
      //console.log("Could not be saved.");
    }
  });

}

});



