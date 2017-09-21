class Api::RestaurantsController < ApplicationController

  # before_action :require_login

  def index
    @restaurants = Restaurant.all
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    #TODO: add this back when everything is working in restaurant
    # @restaurant.owner_id = current_user.id
    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def destroy
    restaurant = Restaurant.find(params[:id])
    restaurant.destroy if restaurant
    render json: restaurant.id
    #TODO: render something else later
    # render :index
  end

  def update
    @restaurant = Restaurant.find(params[:id])
    if @restaurant.update_attributes(restaurant_params)
      render :show
    else
      #TODO: might change this to another action after the error
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:start_price,
                                       :end_price,
                                       :capacity,
                                       :address,
                                       :cusine_type,
                                       :phone_num,
                                       :website,
                                       :dining_style,
                                       :description,
                                       :open_time,
                                       :close_time,
                                       :name,
                                       :owner_id)
  end
end
