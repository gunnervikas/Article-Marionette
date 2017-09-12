FactoryGirl.define do

  factory :user do
  	email "test@gmail.com"
    password  "1234567" 
  end

  factory :article do 
  	 visibility true
  	 title "Title should be 5-20"
	   text "Test with min of 20 characters present to validate"
	   created_at DateTime.now
	   updated_at DateTime.now + 1.week
  end



end
