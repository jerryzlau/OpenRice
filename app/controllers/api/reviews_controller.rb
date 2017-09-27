class Api::ReviewsController < ApplicationController

  def index
    current_restaurant = Restaurant.find(params[:restaurantId]) if params[:restaurantId]
    if current_restaurant
      if params[:userId].to_i == current_restaurant.owner_id
        # restaurant owner reservation index
        # pass in the current user_id and restaurant_id to check if
        # current user is the owner of current restaurant show page, if yes,
        # show all the reservaitons of that restaurant
        @reviews = current_restaurant.reviews.order(:created_at)
      else
        render json: ["Don't have owner access right"], status: 404
      end
    else
      # user profile reservation index
      # pass in the current user id to fetch
      user = User.find_by(id: params[:userId])
      if user
        @reviews = user.review.order(:created_at)
      else
        render json: ["User not found"], status: 404
      end
    end
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      @review
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    review = Review.find(params[:id])
    if review
      review.destroy
      render json: review
    else
      render json: ["Review doesn't exist"], status: 404
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:author_id,
                                    :restaurant_id,
                                    :rating,
                                    :comment)
  end
end
