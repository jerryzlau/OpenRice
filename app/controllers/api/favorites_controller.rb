class Api::FavoritesController < ApplicationController

  def index
    @favorite = Favorite.find_by(restaurant_id: params[:restaurant_id], customer_id: params[:customer_id])
    if @favorite
      @favorite
    else
      render json: []
    end
  end

  def create
    favorite = Favorite.new(restaurant_id: params[:restaurant_id], customer_id: params[:customer_id])
    if favorite.save
      render json: "successfully liked"
    else
      render json: favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    favorite = Favorite.find_by(restaurant_id: params[:restaurant_id], customer_id: params[:customer_id])
    if favorite
      favorite.destroy
      render json: "successfully unliked"
    else
      render json: ["Like doesn't exist"], status: 404
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:restaurant_id, :customer_id)
  end
end
