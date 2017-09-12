var router;
var modelarticleid;


var data_user_email_id;
var data_user_id;


function reviewrequestbtn(ele){

	$.ajax({

		url: '/profiles/userinfo',
		type: 'GET',
		async: false,
		success: function(data_uid){
			data_user_email_id = data_uid[0];
			data_user_id = data_uid[1]; 
		},
		error: function(e){
			console.log("error userid");
		}

	}),


    $.ajax({

        url: '/articles/' + ele +'/reviews',
        contentType: 'application/json',
        data: JSON.stringify({body: $('#reviewrequest_art').val(),
        			 article_id: ele, reviewer: data_user_email_id, user_id: data_user_id }),
        type: 'POST',
        async: false,
        success: function (data) {
        	Backbone.history.navigate("articles/"+ ele, {trigger: true});
        	$('#reviewrequest_art').val('');
        	alert("Review Request send Sucessfully");
         // console.log(" from post request success");
        },
        error: function(e){
          console.log(e);
        } });
}




//Profile Model  
var Profile = Backbone.Model.extend({

  urlRoot: '/profiles/accountinfo'

});