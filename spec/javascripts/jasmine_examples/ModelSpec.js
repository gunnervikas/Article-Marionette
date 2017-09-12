

describe('MODEL SPEC (New Article):: when visibility, title and text is absent', function () {
    var model;
    beforeEach(function () {
        model = new newArticleModel();
        errors = model.validate({});
    });

    it ('should have 3 errors', function () {
        expect(errors.length).toBe(3);
    });

    it ('should have title field as invalid', function () {
         expect(errors[1].toString()).toEqual("Please enter a valid title");
     });

     it ('should have text field as invalid', function () {
         expect(errors[2].toString()).toEqual("Please enter a valid text");
     });

     it ('should have selected visibility', function () {
         expect(errors[0].toString()).toEqual("Please select visibility");
     });

});




describe('MODEL SPEC (New Article):: when title is present and description is absent', function () {
    var model;
    beforeEach(function () {
        model = new newArticleModel();
        errors = model.validate({title: 'This is the title'});

    });

    it ('should have 1 error', function () {
        expect(errors.length).toBe(1);
    });

    it ('should have description field as invalid', function () {
         expect(errors[0].toString()).toEqual("Please enter a valid text");
     });
});


describe('MODEL SPEC (New Article):: when description is present and title is absent', function () {
    var model;
    beforeEach(function () {
        model = new newArticleModel();
        errors = model.validate({text: "This is the description"});
    });

    it ('should have 1 error', function () {
        expect(errors.length).toBe(1);
    });

    it ('should have title field as invalid', function () {
         expect(errors[0].toString()).toEqual("Please enter a valid title");
     });
});

describe('MODEL SPEC (New Article):: when visibility is present, text and title  is absent', function () {
    var model;
    beforeEach(function () {
        model = new newArticleModel();
        errors = model.validate({visibility: true});
    });

    it ('should have 1 error', function () {
        expect(errors.length).toBe(1);
    });

     it ('should have title field as invalid', function () {
         expect(errors[0].toString()).toEqual("Please enter a valid title");
     });

});



describe('VIEW TEST New Article Form is submitted', function () {

  beforeEach(function () {
    this.server = sinon.fakeServer.create();
    this.responseBody = '{"desc":"test user","id":212,"title":"tester"}';
    this.server.respondWith("POST", "/q", 
      [
        200,
        {"Content-Type": "application/json"},
        this.responseBody
      ]
    );
  });

    describe('and no inputs are filled', function () {
        var view;

        beforeEach(function () {
            view = new newArticleView();
            view.render();
            view.$el.find('#art-title').val('').trigger('change');
            view.$el.find('#art-text').val('').trigger('change');
        });

        beforeEach(function () {
            view.$el.find('#submit').trigger('click');
        });

    });

    describe('and all inputs are filled', function () {

        var view1;

        beforeEach(function (){
            view1 = new newArticleView();
            view1.render();

            view1.$el.find('#art-title').val('This is the title?');
            view1.$el.find('#art-text').val('This is the test description?');
            //view1.model.set({"askedby" : "test@test.com"});
        });

        beforeEach(function () {
            
        });

    });

});

