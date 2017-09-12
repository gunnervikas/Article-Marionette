

var PrivateRequestList = Backbone.Collection.extend({
   
    url: '/profiles/privaterequest',
    model: PrivateRequest
});


var PrivateRequestView = Marionette.View.extend({
      

    events: {
      "click .view" : "onView"
    },
    
    render: function(model) {
        $(".viewheader").html("Private Review Request<br>");             
        $('#container').html(this.model.get('title') + "<br>" + this.model.get('created_at') + 
          this.model.get('email') + "<br>" + this.model.get('text') +"<hr>" );
        return this;
    },

    //+ "<button class='view btn-xs btn-primary' id=" + this.model.get("id") + ">View</button>"+ 

    onView: function(){


    console.log("from obn view");

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


});


var PrivateRequestListView = Marionette.CollectionView.extend({

      
    initialize: function() {
      var privaterequestlist = new PrivateRequestList();

      privaterequestlist.fetch({
        success: function (collection) {
          collection.each(function (model) {

            privaterequestview = new PrivateRequestView({
              model: model
            });
            
            $('#private-request').append(privaterequestview.render().el);
          });
        }
      });
    },
 
    render: function() {
      return this;
    }

});
