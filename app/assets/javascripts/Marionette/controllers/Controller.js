
var mycontroller = Marionette.Object.extend({

home: function()
  {
    new ArticleListView();
  },
  viewArticles: function(){

    $('.viewheader').empty();
    $('#container').empty();
    
  new ArticleListView();
    
  },

  viewArticleByID: function(articleid){

    $('.viewheader').empty();
    $('#container').empty();


    var data;

    $.ajax({
      url: '/articles/' + articleid,
      dataType: 'json',
      async: true,
      success: function (data) {
        // console.log("Data fetched sucessfully");
        // console.log(data);



        $('.viewheader').html("<h2><b>" + data.title + "<b></h2>");
        $("#container").append("<h5><i>Published at: " + data.created_at + "</i></h5>");
        $("#container").append("<h5><i>Updated at: " + data.updated_at + "</i></h5>");
        $("#container").append("<h4>" + data.text + "</h5><br><br>");
        // $("#container").append("<input type='textarea' placeholder='Enter Reviewer Email' >" + " " + "<button class='edit-request btn-xs btn-primary'>Send</button>" + "<hr>");
        $('#container').append("<label>Send Review Request</label>");
        $('#container').append("<textarea class='form-control' id='reviewrequest_art' placeholder='Minimum 10 Characters'></textarea><br> <button class='CreateSubmit btn btn-success' id='sendreviewrequest' onClick='reviewrequestbtn(" + data.id + ");'>Send Review</button>");




      },

      error: function(){
        // console.log(" Get article by ID error");
      }

    });

    // var showarticlemodel = new ShowArticleModel();
    // showarticlemodel.render();

  },

  newArticle: function(){

    $('.viewheader').empty();
    $('#container').empty();
    //$("#container").html(newarticleview.render().el);
    var obj = new newArticleView();
     obj.render();


  },

  editArticle: function(){


    $('.viewheader').empty();
    $('#container').empty();

    editarticleview = new editArticleView();



    editarticleview.render();

  },

  publishedArticles: function(){


    $('.viewheader').empty();
    $('#container').empty();

    new MyArticleListView();

  },

  privateArticles: function(){


    $('.viewheader').empty();
    $('#container').empty();

      new PrivateArticleListView();

  },

  Reviews: function(){

    $('.viewheader').empty();
    $('#container').empty();

    new MyReviewListView();

  },

  publicReviewRequest: function(){

    $('.viewheader').empty();
    $('#container').empty();

    new ReviewRequestListView();

  },

  privateReviewRequest: function(){


    $('.viewheader').empty();
    $('#container').empty();

    new PrivateRequestListView();

  },

  AccountInfo: function(){


    $('.viewheader').empty();
    $('#container').empty();

    var profile = new Profile();

    var p = profile.fetch({

      success: function (model1) {

        profileView = new ProfileView({model: model1});

        profileView.render();
                 
        }

    });

  },
  defaultRoute: function(){
    
  }

});
