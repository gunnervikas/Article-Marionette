
var ReviewRequestList = Backbone.Collection.extend({

    url: '/profiles/reviewrequest',

    model: ReviewRequest

});



var ReviewRequestView = Marionette.View.extend({

  el: "#container",

  events: {
    "click .publish": "onPubish",
  },

  onPublish: function() {

    this.remove();

    this.model.destroy({

      success: function(){
       console.log("success");
      },
      error: function(){
        console.log("error");
      }

    });
    
  },
  

  render: function(model){
    $(".viewheader").html("Public Review Request<br><br>");
    this.$el.append(this.model.get('reviewer') + "<br>" + this.model.get('body') +
       "<br>" + this.model.get('visibility') + "<br>" + this.model.get('created_at') + "<br>" + "<button class='publish btn-xs btn-primary' id=" + this.model.get("id") + ">Publish</button>"+ "<hr>" );
    return this;
  } 

});


var ReviewRequestListView = Marionette.View.extend({

      
    initialize: function() {
      var reviewrequestlist = new ReviewRequestList();
      reviewrequestlist.fetch({
        success: function (collection) {
          collection.each(function (model) {

            reviewrequestview = new ReviewRequestView({
              model: model
            });
            
            $('#review-request').append(reviewrequestview.render().el);
          });
        }
      });
    },
 
    render: function() {
      return this;
    }
});
