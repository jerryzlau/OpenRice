# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(first_name: 'Demo',
         last_name: 'openRice',
         password: '123456',
         email: "demo@demo.com",
         owner: false,
         primary_city: 'San Francisco')

5.times do |i|
  restaurant = {name: "demo - restaurant#{i}",
               owner_id: 1,
               start_price: 0,
               end_price: 0,
               capacity: 50,
               address: "123 demo street",
               cusine_type: "chinese",
               phone_num: "000000000",
               website: "www.demo.com",
               dining_style: "demo style",
               description: "demo about",
               open_time: "09.30 AM",
               close_time: "10:00 AM"}
  Restaurant.create(restaurant)
end        
