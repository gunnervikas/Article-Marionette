class ReviewrequestsController < ApplicationController

	def new
    	@reviewrequest = Reviewrequest.new
    	@a = Article.find(params[:article_id])
    	
    end
 
 	def create

    	@reviewrequest = current_user.reviewrequests.build(reviewrequest_params)

    	if @reviewrequest.save
    		flash[:notice] = "Review Request Send Successfully!!"
      		#redirect_to url_for(:controller => :profiles, :action => :privatearticle)
    	else
      		#render 'new'
      end

	end

	private

    	def reviewrequest_params
      		params.require(:reviewrequest).permit(:article_id, :reviewer_id)
    	end

end
