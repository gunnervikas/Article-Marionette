class ReviewsController < ApplicationController

  before_action :authenticate_user!


  def create

    @article = Article.find(params[:article_id])
    @review = @article.reviews.build(review_params)
    if @review.save
      #redirect_to article_path(@article)
      #flash[:notice] = "Review Request send Sucessfully"
    else
      #redirect_to article_path(@article)
      #flash[:notice] = "Review Request was not send"
    end

  end

  def destroy

    @article = Article.find(params[:article_id])
    @review = @article.reviews.find(params[:id])
    @review.destroy
    redirect_to request.referer
    flash[:notice] = "Review Deleted Sucessfully"

  end

  private

    def review_params
      params.require(:review).permit(:reviewer, :body, :user_id, :article_id)
    end


end
