json.restaurant do
  json.extract! @restaurant, :id,
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
end
