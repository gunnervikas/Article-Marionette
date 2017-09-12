
var MyReviewList = Backbone.Collection.extend({

    url: '/profiles/myreview',
    model: MyReview

});


function reviewdelete(a_id, id){

  $.ajax({
    url: '/articles/' + id + "/reviews/" + a_id,
    method: 'DELETE',
    dataType: 'json',
    async: true,

    success: function (data) {

      Backbone.history.loadUrl();
      
    },

    error: function(e){

      Backbone.history.loadUrl();

    } 

    });

   

}


var MyReviewView = Marionette.View.extend({

    el: '#container',

    // events: {
    //   "click .delete": "onDelete",
    // },

    // onDelete: function() {

    //   this.remove();

    //   },
      
    
    
    render: function(model) {


        //console.log(this.model.get('article_id'));

        $(".viewheader").html("Reviews");
        this.$el.append(this.model.get('reviewer') + "<br>" +
        this.model.get('body') + "<br>" + "<button  class='delete btn-xs btn-primary' id=" + this.model.get("id") + " onclick='reviewdelete(" + this.model.get('id') + ", " + this.model.get('article_id') + ");'>Delete</button>"+ "<hr>");


        return this;

    }

});

var MyReviewListView = Marionette.CollectionView.extend({

      
    initialize: function() {
      var myreviewlist = new MyReviewList();
          // articles    = $(this.el).find('#articles')
          // articleView;

    myreviewlist.fetch({
        success: function (collection) {
          collection.each(function (model) {

            myreviewview = new MyReviewView({
              model: model
            });
            
            $('#my-review').append(myreviewview.render().el);
          });
        }
      });
    },
 
    render: function() {
      return this;
    }

});

