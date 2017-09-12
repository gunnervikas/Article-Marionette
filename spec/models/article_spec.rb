require 'rails_helper'

RSpec.describe Article, type: :model do

	#let(:fakeuser) { User.create!(email: "test@gmail.com", password: "123456") }

	let(:user) { create(:user) } 

	let(:article) { build(:article)}


	it "is valid with valid attributes" do
    	#article.user_id = fakeuser.id
    	article.user_id = user.id
    	expect(article).to be_valid
  	end

  	it "is not valid with a title of more than 20 characters" do
  		article.title = 'a' * 20
		expect(article).to_not be_valid
	end


	it "is not valid without a title" do
		article.title = nil
		expect(article).to_not be_valid
	end

	it "is not valid without a text body" do
		article.text = nil
		expect(article).to_not be_valid
	end


	it "is not valid without a visibility radio button" do
		article.visibility = nil
		expect(article).to_not be_valid
	end

	it "may have many reviews" do
	  assc = Article.reflect_on_association(:reviews)
	  expect(assc.macro).to eq :has_many
	end

	it "belongs to one user" do
	  assc = Article.reflect_on_association(:user)
	    expect(assc.macro).to eq :belongs_to
	end



end
