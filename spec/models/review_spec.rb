require 'rails_helper'

RSpec.describe Review, type: :model do

	let(:fakeuser) { User.create!(email: "test@gmail.com", password: "123456") }

	let(:fakearticle) { Article.create!(id: 1, user_id: fakeuser.id, visibility: true, title: "Title should be 5-20",
					 text: "Test with min of 20 characters present to validate",
					 created_at: DateTime.now, updated_at: DateTime.now + 1.week)
					}

	let(:review) {described_class.new(body: "This can not be left blank")}

	it 'is valid with valid attributes' do
		review.user_id = fakeuser.id
		review.article_id = fakearticle.id
		expect(review).to be_valid
	end


	it 'is not valid without attributes' do
		review.body = nil
		expect(review).to_not be_valid
	end

	it "belongs to one user" do
	  assc = Review.reflect_on_association(:user)
	    expect(assc.macro).to eq :belongs_to
	end

	it "belongs to one user" do
	  assc = Review.reflect_on_association(:article)
	    expect(assc.macro).to eq :belongs_to
	end
end
