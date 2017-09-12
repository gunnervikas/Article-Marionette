require 'rails_helper.rb'


describe "Artiicle website", :type => :feature do
  before :each do

     User.create(email: 'user@example.com', password: 'password')
  end

  it "signs me in to create article and review", js: true do

    visit new_user_session_path
    #within("#session") do
    fill_in 'Email', with: 'user@example.com'
    sleep(1)
    fill_in 'Password', with: 'password'
    sleep(1)
    click_button 'Log in'
    sleep(1)
    expect(page).to have_content 'Account Info'
	sleep(1)

	visit new_article_path
	sleep(1)
	choose 'article_visibility_true'
	sleep(1)
	fill_in "Title", with: 'this is test title'
	sleep(1)
	fill_in 'Text', with: 'this is the text of the article to be published'
	sleep(1)
	click_button 'Create Article'
	sleep(1)
	expect(page).to have_content 'Article Created Successfully'

    sleep(1)
    fill_in 'review_body', with: ''
    sleep(1)
    click_button 'Send Request'
    sleep(1)
    expect(page).to have_content 'Review Request was not send'

    sleep(1)
    fill_in 'review_body', with: 'This the my review for the article'
    sleep(1)
    click_button 'Send Request'
    sleep(1)
    expect(page).to have_content 'Review Request send Sucessfully'
    sleep(1)

    visit articles_path
    sleep(2)

    visit accountinfo_profiles_path
  	sleep(1)
 	expect(page).to have_content 'Account details'
 	sleep(1)

    visit myreview_profiles_path
  	sleep(1)
 	expect(page).to have_content 'My Reviews'
 	sleep(1)

 	visit reviewrequest_profiles_path
  	sleep(1)
 	expect(page).to have_content 'Review Request'
 	sleep(1)

 	visit myarticle_profiles_path
  	sleep(2)
   	expect(page).to have_content 'My Articles'
 	sleep(1)	

 	click_link 'Show'
 	sleep(1)
 	expect(page).to have_content 'Author'
 	sleep(1)
 	visit myarticle_profiles_path
 	sleep(1)
 	expect(page).to have_content 'My Article'
 	sleep(1)
 	click_link 'Edit'
 	sleep(1)
 	expect(page).to have_content 'Edit article'
 	sleep(1)
 	choose 'article_visibility_false'
 	sleep(1)
 	click_button 'Create Article' 
 	sleep(1)

    visit privatearticl	e_profiles_path
  	sleep(2)
 	expect(page).to have_content 'Private Article'
 	sleep(1)

 	visit privaterequest_profiles_path
  	sleep(1)
 	expect(page).to have_content 'Private Review Request'
 	sleep(1)

  end
end