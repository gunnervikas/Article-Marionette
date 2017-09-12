require 'rails_helper'

RSpec.describe User, type: :model do

	let(:user) { described_class.new(:email => "test@gmail.com", :password => "123456",
                       :password_confirmation => "123456") }

	it "is valid with valid attributes" do
    	expect(user).to be_valid
  	end

  	it "is not valid with password less than 6 characters" do
  		user.password = 'pw345'
  		expect(user).to_not be_valid
   	end

	it "is not valid without a email" do
		user.email = nil
		expect(user).to_not be_valid
	end

	it "is not valid without password" do
		user.password = nil
		expect(user).to_not be_valid
	end

	it "may have many articles" do
	  assc = User.reflect_on_association(:articles)
	  expect(assc.macro).to eq :has_many
	end

	it "may have many reviews" do
	  assc = User.reflect_on_association(:reviews)
	  expect(assc.macro).to eq :has_many
	end

end
