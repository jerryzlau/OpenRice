class Api::ReservationsController < ApplicationController

  def index
    current_restaurant = Restaurant.find(params[:restaurantId])
    if current_restaurant
      if params[:userId] == current_restaurant.owner_id
        # restaurant owner reservation index
        # pass in the current user_id and restaurant_id to check if
        # current user is the owner of current restaurant show page, if yes,
        # show all the reservaitons of that restaurant
        @reservations = Reservation.find_by(restaurant_id: params[:restaurantId])
      end
    else
      # user profile reservation index
      # pass in the current user id to fetch
      @reservations = Reservation.find_by(customer_id: params[:userId])
    end
  end

  def show
    @reservation = Reservation.find(params[:id])
  end

  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def destroy
    reservation = Reservation.find(params[:id])
    if reservation
      reservation.destroy
      render json: reservation
    else
      render json: ["Reservation doesn't exist"], status: 404
    end 
  end

  def update
    @reservation = Reservation.find(params[:id])
    if @reservation.update_attributes(reservation)
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:num_ppl,
                                        :book_time,
                                        :book_date,
                                        :notes,
                                        :customer_id,
                                        :restaurant_id)
  end
end
