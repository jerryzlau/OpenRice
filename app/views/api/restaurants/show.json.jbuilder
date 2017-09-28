json.restaurant do
  json.extract! @restaurant, :id,
                             :name,
                             :image_url,
                             :owner_id,
                             :start_price,
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
                             :owner, #association jump tables
                             :reservations,
                             :reviews
  json.likes @restaurant.favorites.count
  json.favorited current_user.favorited?(@restaurant) if current_user
end
