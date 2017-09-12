require 'rails_helper'

RSpec.describe Reviewrequest, type: :model do

	let(:fakeuser) { User.create!(email: "test@gmail.com", password: "123456") }

	let(:fakearticle) { Article.create!(id: 1, user_id: fakeuser.id, visibility: true,
					 title: "Title should be 5-20",
					 text: "Test with min of 20 characters present to validate",
					 created_at: DateTime.now, updated_at: DateTime.now + 1.week)
					}

	let(:reviewrequest) {described_class.new(id: 1, user_id: 1,
						reviewer_id: 2, created_at: DateTime.now,
						updated_at: DateTime.now + 1.week)}

	it 'is valid with valid attributes' do
		reviewrequest.article_id = fakearticle.id
		reviewrequest.user_id = fakeuser.id
		expect(reviewrequest).to be_valid
	end


end
