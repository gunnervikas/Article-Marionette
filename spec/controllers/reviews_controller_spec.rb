require "rails_helper"

RSpec.describe ReviewsController, :type => :controller do

  describe "#create" do
    it "creates a review successfully" do
      @review = Review.create(visibility: true, article_id: 1, reviewer: "Test", body: "Test")
      expect(@review).to be_an_instance_of Review
      end
  end

end