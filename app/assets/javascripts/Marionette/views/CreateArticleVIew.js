
//Create New Article



var newArticleView = Marionette.View.extend({

  model: newArticleModel,
  el: '#container',

  render: function(){
    //console.log("Hello");
    $(".viewheader").html("<h3><b>New Article</b></h3><br>");
    $('#container').empty();
    $('#container').html(
      "<label>Public:</label>&nbsp" + "<input type='radio' id='visibility-true' name='visibility' value='true' class='form-group' class='control-label'" +
      "<br><label>Private:</label>&nbsp" + "<input type='radio' id='visibility-false' value='false' name='visibility'  class='form-group class='control-label'<br>" +
      "<br><br><label>Title</label><br>" + 
      "<input type='text' id='art-title' placeholder='Minimum 5 Characters' class='form-control'><br>" +
      "<label>Description</label>" + 
      "<textarea class='form-control' id='art-text' placeholder='Minimum 20 Characters'></textarea><br> <button class='CreateSubmit btn btn-success' id='sub' onClick='subcheck();'>Submit Article</button>");
    return this;
  },


  onSubmit: function()
  {

    //console.log("on render function");
    newarticlemodel = new newArticleModel();
    var rvalue = $("input[name='visibility']:checked").val();
    //console.log(rvalue);
    newarticlemodel.set({visibility: rvalue, title: $('#art-title').val(), text: $("#art-text").val()});

    newarticlemodel.save({},{
      success: function(model, response, options)
      {

        //console.log("Article Saved.");
        
        //router.navigate("#articles");
        //window.location.reload();
       // console.log(response);
        Backbone.history.navigate("articles", {trigger: true});
        
      },
      error: function(model,xhr,options)
      {
        //router.navigate("#articles");
        //console.log("Could not be saved.");
       // console.log(xhr);
        Backbone.history.navigate("articles", {trigger: true});
      }

    });
    //debugger;

    //console.log($("#title").val());
  },


});


function subcheck(){

console.log("on render function");
    newarticlemodel = new newArticleModel();
    var rvalue = $("input[name='visibility']:checked").val();
    console.log(rvalue);
    newarticlemodel.set({visibility: rvalue, title: $('#art-title').val(), text: $("#art-text").val()});

    newarticlemodel.save({},{
      success: function(model, response, options)
      {

        //console.log("Article Saved.");
        
        //router.navigate("#articles");
        //window.location.reload();
        console.log(response);
        Backbone.history.navigate("articles", {trigger: true});
        
      },
      error: function(model,xhr,options)
      {
        //router.navigate("#articles");
        //console.log("Could not be saved.");
        //console.log(xhr);
        Backbone.history.navigate("articles", {trigger: true});
      }

    });
    //debugger;

    //console.log($("#title").val());

}

//newarticleview = new newArticleView();

// newarticleview.render();
