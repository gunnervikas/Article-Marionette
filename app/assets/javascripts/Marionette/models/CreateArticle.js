
// var newArticleModel = Backbone.Model.extend({


//   urlRoot: '/articles/',
  
//   defaults: {

//   },

// });




var newArticleModel = Backbone.Model.extend({


  urlRoot: '/articles/',
  
  title: "",

  text: "",

  visibility: "",

  validate: function(attrs){
  	var error = [];
  	if (!attrs.title && !attrs.text && !attrs.visibility)
  	{
  		//error.empty();
  		error.push("Please select visibility")
  		error.push("Please enter a valid title");
  		error.push("Please enter a valid text");
  		return error;
  	}
  	if(!attrs.title)
  	{
  		error.push("Please enter a valid title");
  		return error;
  	}
  	if(!attrs.text)
  	{
  		error.push("Please enter a valid text");
  		return error;
  	}
  	if(!attrs.visibility)
  	{
  		error.push("Please select visibility");
  		return error;
  	}
  }

});
