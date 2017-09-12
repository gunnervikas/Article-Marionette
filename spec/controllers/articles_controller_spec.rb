require "rails_helper"

  RSpec.describe ArticlesController, :type => :controller do


    describe "anonymous user" do
      before :each do
        # This simulates an anonymous user
        login_with nil
      end

      it "should be redirected to signin" do
        get :new
        expect( response ).to redirect_to( new_user_session_path )
      end


      it "should be redirected to signin" do
        get :create
        expect( response ).to redirect_to( new_user_session_path )
      end

    end


  describe "GET #index" do

    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end

  end

  describe "#new" do
    it "Creates an instance of Question model" do
        @article = Article.new
        expect(@article).to be_an_instance_of Article
    end
  end

  describe "#create" do
    it "creates a article successfully" do
      @article = Article.create(visibility: true, title: "Test", text: "Test")
      expect(@article).to be_an_instance_of Article
    end

  end

end







