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
         owner: true,
         primary_city: 'San Francisco')

5.times do |i|
  name = Faker::GameOfThrones.character
  first = name.split[0]
  last = name.split[1]

  User.create(first_name: first,
              last_name: last,
              password: '123456',
              email: "#{first}@got.com",
              owner: false,
              primary_city: 'San Francisco')
end

NAME = ["Urban Curry",
        "Omakase",
        "Calzone's Pizza Cucina",
        "Michael Mina – San Francisco"]
START_PRICE = [30, 50, 30, 50]
END_PRICE = [100, 500, 70, 200]
ADDRESS = ["523 Broadway San Francisco, CA 94133",
           "665 Townsend Street San Francisco, CA 94103",
           "430 Columbus San Francisco, CA 94133",
           "252 California Street San Francisco, CA 94111"]
CUSINE = ["Indian, Nepalese, Vegetarian",
          "Japanese, Sushi",
          "Italian, Contemporary American",
          "American, Contemporary American, Japanese"]
WEBSITE = ["http://www.urbancurry.com/",
           "http://omakasesf.com/",
           "http://www.calzonesf.com/",
           "http://www.michaelmina.net/restaurants/san-francisco-bay-area/michael-mina/"]
DINING = ["Casual Dining",
          "Fine Dining",
          "Casual Dining",
          "Casual Elegant"]
ABOUT = ["Urban Curry, one of the most prestigious and exciting Indian & Pakistani restaurants, located at 523 Broadway St. San Francisco California. With our warm traditional decoration, pleasant surroundings and our open kitchen, you will enjoy an authentic meal. At Urban Curry we emulate the style elegance and variety reminiscent of the olden ages with the spices specially imported from India & Pakistan, more importantly, we use only Halal meat. Feel free to complement your meals by bringing your own wine or beer (with no corkage fee).", "Omakase offers two different fixed-price tasting menus that will take you through your senses. The culinary journey you experience will introduce you to the many flavors of Japanese cuisine with our fish flown in from the famous Tsukiji Fish Market in Tokyo, Japan. Omakase specializes in Edomae — traditional style sushi. We partner with chefs trained in the top restaurants of Tokyo. Premium sakes are individually selected to complement your meal as you enjoy the day’s best selected fishes. Thank you for entrusting your taste buds to the chefs and for choosing Omakase.", "It doesn’t get more local than Calzone's Pizza Cucina, in the heart of North Beach. Whether you're sitting outside at the heated cafe tables or inside in one of the comfy booths, this sparkling bistro with a decidedly Cal-Euro atmosphere is the perfect place for watching eclectic locals mix with visitors drawn by North Beach's reputation as the hip place to see and be seen. The restaurant has been owned and operated by the same North Beach native since 1986 and is open 365 days a year, serving food continuously from 11:30 am until 1:00 am.", "Michelin-starred MICHAEL MINA is the crowning jewel that captures the core of Michael's philosophy: bold yet balanced flavors achieved through a combination of acidity, sweetness, spice and richness. At the helm, Executive Chef Raj Dixit achieves these bold, balanced flavors in a cuisine, which draws upon global influences, showcasing the highest quality authentic and seasonal ingredients. The 5-course tasting menu invites guests to explore a dynamic expression of Chef Michael Mina’s vast culinary influences while also providing options within each course for the guest to define their ultimate dining experience. The tasting menu is offered for dinner only at $145 per person, with vegetarian options and supplements at an additional cost. A paired down 'a la carte' dinner menu is available at the bar. Lunch is served in the dining room featuring an à la carte menu and at the bar featuring an array of seasonal small plates, as well as salads."
          ]
OPEN_TIME = ["11:00 AM", "5:00 PM", "11:30 AM", "11:30 AM"]
CLOSE_TIME = ["11:00 PM", "9:00 PM", "1:00 AM", "2:00 PM"]
IMAGE = ["https://resizer.otstatic.com/v2/profiles/legacy/48718.jpg",
         "https://resizer.otstatic.com/v2/profiles/legacy/174622.jpg",
         "https://resizer.otstatic.com/v2/profiles/legacy/60331.jpg",
         "https://resizer.otstatic.com/v2/profiles/legacy/51049.jpg"]

4.times do |i|
  Faker::Config.locale = 'en-US'
  phone = "(#{Faker::PhoneNumber.area_code})#{Faker::PhoneNumber.exchange_code}-#{Faker::PhoneNumber.subscriber_number}"
  restaurant = {name: NAME[i],
               owner_id: 1,
               start_price: START_PRICE[i],
               end_price: END_PRICE[i],
               capacity: 50,
               address: ADDRESS[i],
               cusine_type: CUSINE[i],
               phone_num: phone,
               website: WEBSITE[i],
               dining_style: DINING[i],
               description: ABOUT[i],
               open_time: OPEN_TIME[i],
               close_time: CLOSE_TIME[i],
               image_url: IMAGE[i]}
  Restaurant.create(restaurant)
end
