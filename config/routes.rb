Rails.application.routes.draw do

  devise_for :users
	
  resources :articles do


    
    patch :update_visibility_of_article_true, on: :member
	   resources :reviews
     
  end

  root 'articles#index'

  # get '/*'

  # resources 'profiles'

  resources :profiles do
    patch :update_visibility_of_review_true, on: :member
    collection do  
      get 'accountinfo'
      get 'myreview'
      get 'reviewrequest'  
      get 'myarticle'
      get 'privatearticle'
      get 'privaterequest'
      get 'userinfo'
      end
  end

  resources :reviewrequests do

  end


  # resources :posts do
  #   get 'categoryshow', :on => :collection
  # end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
