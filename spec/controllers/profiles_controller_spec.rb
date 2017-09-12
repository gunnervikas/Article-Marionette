require "rails_helper"

RSpec.describe ProfilesController, :type => :controller do

  describe "#" do
    it "has a 302 status code" do
      get :accountinfo
      expect(response.status).to eq(302)
    end

    it "has a 302 status code" do
      get :myarticle
      expect(response.status).to eq(302)
    end

    it "has a 302 status code" do
      get :myreview
      expect(response.status).to eq(302)
    end

    it "has a 302 status code" do
      get :privatearticle
      expect(response.status).to eq(302)
    end

    it "has a 302 status code" do
      get :privaterequest
      expect(response.status).to eq(302)
    end

    it "has a 302 status code" do
      get :reviewrequest
      expect(response.status).to eq(302)
    end

  end

end