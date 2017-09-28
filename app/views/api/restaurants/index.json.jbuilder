@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id,
                              :image_url,
                              :name,
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
    json.likes restaurant.favorites.count
    json.favorited current_user.favorited?(@restaurant) if current_user
  end
end
