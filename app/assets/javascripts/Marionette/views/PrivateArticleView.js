


var PrivateArticleList = Backbone.Collection.extend({

  url: '/profiles/privatearticle',
  model: PrivateArticle

});


var newReviewRequestModel = Backbone.Model.extend({

  url: '/reviewrequests'

});

var PrivateArticleView = Marionette.View.extend({

  el: "#container",



  events: {
   
    //"click .edit-request" : "onEditRequest"
  },



  render: function(model) {
    $(".viewheader").html("Private Article<br>"); 
    $('#container').append(this.model.get('title') + "<br>" + this.model.get('created_at') + 
      this.model.get('updated_at') + "<br>" + this.model.get('text') + "<br><br>" + "<label>Invite To Edit: </label>" + " ");
    this.$el.append("<input type='text' id='r_" + this.model.get('id') + "' placeholder='Enter Reviewer Email' >" + " " + "<button class='edit-request btn-xs btn-primary' onclick='sub(" + this.model.get('id') + ");'  id=" + this.model.get('id') + ">Send</button>" + "<hr>");
    return this;
  },

  onEditRequest: function(ele) {
      
      //console.log(this.value);
      newreviewrequest = new newReviewRequestModel();
      //console.log($('#r_' + this.model.get('id')).val());

  }

});

function sub(ele)
{
  // var ul = $(ele.target);
  //console.log($('#r_' + ele).val());
  $.ajax({
      url: '/reviewrequests',
      contentType: 'application/json',
      data: JSON.stringify({reviewer_id: $('#r_' + ele).val(), article_id: ele}),
      type: 'POST',
      async: true,
      success: function (data) {
        //console.log("success");
      },
      error: function(e){
       // console.log(e);
      } });
}

  var PrivateArticleListView = Marionette.CollectionView.extend({


  initialize: function() {

    var privatearticlelist = new PrivateArticleList();

    privatearticlelist.fetch({
      success: function (collection) {
        collection.each(function (model) {

          privatearticleview = new PrivateArticleView({
            model: model
          });

          $('#private-article').append(privatearticleview.render().el);
        });
      }
    });
  },

  render: function() {
      return this;
    }
  });
