
//Profile View 
var ProfileView = Marionette.View.extend({

	render: function() {

    $(".viewheader").html("Account Information<br><br>");
    $('#container').html(this.model.get('email'));

    return this;

  }

});
