# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(first_name: 'OwnerDemo',
         last_name: 'openRice',
         password: '123456',
         email: "ownerdemo@demo.com",
         owner: true,
         primary_city: 'San Francisco')

User.create(first_name: 'CustomerDemo',
        last_name: 'openRice',
        password: '123456',
        email: "customerDemo@demo.com",
        owner: false,
        primary_city: 'San Francisco')

User.create(first_name: 'rebekah',
        last_name: 'liu',
        password: '123456',
        email: "rebekah@demo.com",
        owner: false,
        primary_city: 'San Francisco')

User.create(first_name: 'maple',
        last_name: 'law',
        password: '123456',
        email: "maple@demo.com",
        owner: false,
        primary_city: 'San Francisco')

User.create(first_name: 'jack',
        last_name: 'lau',
        password: '123456',
        email: "jack@demo.com",
        owner: false,
        primary_city: 'San Francisco')

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
WEBSITE = ["https://www.urbancurry.com/",
           "https://omakasesf.com/",
           "https://www.calzonesf.com/",
           "https://www.michaelmina.net/restaurants/san-francisco-bay-area/michael-mina/"]
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

# first restaurant review
Review.create(author_id: 2,
              restaurant_id: 1,
              comment: "Great experience and even got to meet the two friendly owners this time. I am a local and live in North Beach so often go there as its great tasty food and excellent service.",
              food: 5,
              ambience: 5,
              service: 5,
              value: 5)

Review.create(author_id: 3,
              restaurant_id: 1,
              comment: "It is not a place for a romantic gathering, business, impress your companion, etc. Tired furniture, bad lighting, the kitchen is not separated from the dining room so, the smell is strong. Pretty decent Indian meals, reasonable prices. Servers do their job, but don't expect all-smiles staff.",
              food: 3,
              ambience: 2,
              service: 2,
              value: 4)

Review.create(author_id: 4,
              restaurant_id: 1,
              comment: "The food was very tasty!! The service was very good as well. Recommended!!",
              food: 4,
              ambience: 4,
              service: 5,
              value: 5)

Review.create(author_id: 5,
              restaurant_id: 1,
              comment: "Got there early on a Sunday, so there were only one or two tables occupied. Friendly servers and efficient service. The menu had the usual curry dishes, but sadly no peshwari naan. We had garlic naan, which was good nonetheless. The chicken jalfrezi was tasty with chicken breast and thigh meat and plenty of peppers. No green chill is though, although the spice level was good. Overall, this was a good curry experience.",
              food: 4,
              ambience: 4,
              service: 4,
              value: 1)

# second restaurant review
Review.create(author_id: 2,
              restaurant_id: 2,
              comment: "It's been a while since I've had fish that I've never had before as well as tasted food that were completely new! Sake list is also incredible.",
              food: 5,
              ambience: 5,
              service: 5,
              value: 5)

Review.create(author_id: 3,
              restaurant_id: 2,
              comment: "I am not a foodie. This was the most amazing meal of my life.",
              food: 5,
              ambience: 5,
              service: 5,
              value: 5)

Review.create(author_id: 4,
              restaurant_id: 2,
              comment: "Great food but expensive. First course was a little slimy and totally turned off the girlfriend.",
              food: 5,
              ambience: 4,
              service: 5,
              value: 3)

Review.create(author_id: 5,
              restaurant_id: 2,
              comment: "First, the quality of the sushi was fantastic. So was the waitress that served us. Why the bad rating then? We were absolutely treated like second class citizens by the host for some unknown reason.

Despite arriving early and requesting bar seats (it is a sushi bar with 12 bar seats and only 2 tables) we were ignored for 20 minutes then told we had to sit at a table... being seated last and about 30 minutes after our reservation despite the restaurant having a policy of 2 nightly seatings (5:30 and 8:30)

We missed out on getting to see the chefs work, talk to them, and have interaction with other patrons.

I think the worst part was that the host made some lame excuse as to why we were relegated to the table, which was clearly BS.

Such a shame because the food was exceptional. Will definitely not be going back.",
              food: 5,
              ambience: 1,
              service: 1,
              value: 4)

# third restaurant review
Review.create(author_id: 2,
              restaurant_id: 3,
              comment: "They were very helpful accommodating our two kids and stroller, and had berry pancakes that were the bomb.",
              food: 5,
              ambience: 5,
              service: 5,
              value: 5)

Review.create(author_id: 3,
              restaurant_id: 3,
              comment: "This has been our Go-To before we hit the bridge happy hour or quick dinner for years now.
Love the place.
Great tastes, however, this time the tofu appetizer (delicious) but was heavy on salt.
Better next time, I am sure.",
              food: 3,
              ambience: 4,
              service: 3,
              value: 4)

Review.create(author_id: 4,
              restaurant_id: 3,
              comment: "Great pizza, wonderful salad. Salmon was a little dry.",
              food: 4,
              ambience: 4,
              service: 4,
              value: 4)

Review.create(author_id: 5,
              restaurant_id: 3,
              comment: "Friendly service, helpful with recommendations and lovely atmosphere!",
              food: 5,
              ambience: 5,
              service: 5,
              value: 4)

# fourth restaurant
Review.create(author_id: 2,
              restaurant_id: 4,
              comment: "I've been walking past Michael Mina SF for years on my way to its neighbor, the longstanding city favorite Tadich Grill. My curiosity prevailed after looking inside through the front windows many times and I made a reservation for lunch with my wife. I had heard good thing about the restaurant and wasn't disappointed in the five course tasting menu; they met my high expectations and a little bit more. The staff were friendly and professional and every one of them who came to our table seemed interested in our enjoyment. The only minor glitch was a course they delivered to me without replacing my utensils. A man saw me looking around for staff and came to the table. He immediately saw what was missing and utensils were dispatched. The man turned out to be the general manager. He returned to the table as we finished dessert and poured us each a glass of Very Nice Port and gave us his card and said he hoped to see us again. He will. The food. The food. The food. All of it flavorful and presented beautifully. The tuna tartar was finished at the table and topped with a fresh quail egg; the peach gazpacho served with a tender prawn had layers of flavor and a texture enhanced by leaving the peel on the bits of peach; the beef was a small cut of Wagyu beef cooked rare and silky as each bite seemed to dissolve in my mouth; dessert managed to combine a medley of chocolate flavors and textures. Expect to spend some money, even before seeing the extensive wine list, but Michael Mina SF is worth what it costs when one considers the complete experience.",
              food: 5,
              ambience: 5,
              service: 4,
              value: 3)

Review.create(author_id: 3,
              restaurant_id: 4,
              comment: "Poor website does not make it clear that Michael Mina has several different restairants. VERY CONFUSING.
Staff rushed each course and left food to get cold. After asking to take our dishes 4-5 times, the next course was presented within seconds after we finished the previous course, indicating that it had been sitting ready for some time. Hot food was nearly cold when served.",
              food: 2,
              ambience: 5,
              service: 3,
              value: 2)

Review.create(author_id: 4,
              restaurant_id: 4,
              comment: "This place continues to impress. The flavors were fresh, creative, and beautifully plated. The staff is very attentive without being overbearing and is very knowledgeable. The five course meal was a perfect amount, especially with the occasional additional items the chef offers between courses. Michael Mina is a special place that is always high on our list for a special occasion. It deserves another Michelin star.",
              food: 5,
              ambience: 5,
              service: 5,
              value: 5)

Review.create(author_id: 5,
              restaurant_id: 4,
              comment: "Perfect. The most interesting food combinations I've seen. Creative. The staff were kind, engaging, and friendly. It really doesn't get better than this. The noise level never got ridiculous. The music level was perfect. Beautiful place. Don't miss it.",
              food: 5,
              ambience: 5,
              service: 5,
              value: 5)

# first restaurant reservation
Reservation.create(customer_id: 2,
                   restaurant_id: 1,
                   num_ppl: 5,
                   notes: "nothing special",
                   booking: "2017-10-06 19:00")
# second restaurant Reservation
Reservation.create(customer_id: 2,
                   restaurant_id: 2,
                   num_ppl: 3,
                   notes: "nothing special",
                   booking: "2017-05-18 13:00")

Reservation.create(customer_id: 3,
                  restaurant_id: 2,
                  num_ppl: 3,
                  notes: "it's maple's birthday",
                  booking: "2017-10-06 19:00")
# third restaurant Reservation
Reservation.create(customer_id: 4,
                   restaurant_id: 1,
                   num_ppl: 3,
                   notes: "nothing special",
                   booking: "2017-12-07 17:00")
# fourth restaurant Reservation
Reservation.create(customer_id: 5,
                   restaurant_id: 4,
                   num_ppl: 5,
                   notes: "nothing special",
                   booking: "2017-12-10 20:00")

# first restaurant like
Favorite.create(restaurant_id: 1,
                customer_id: 2)

Favorite.create(restaurant_id: 1,
                customer_id: 3)
# second restaurant like
Favorite.create(restaurant_id: 2,
                customer_id: 2)

Favorite.create(restaurant_id: 2,
                customer_id: 4)
# third restaurant like
Favorite.create(restaurant_id: 3,
                customer_id: 3)

Favorite.create(restaurant_id: 3,
                customer_id: 2)

Favorite.create(restaurant_id: 3,
                customer_id: 5)
# fourth restaurant like
Favorite.create(restaurant_id: 4,
                customer_id: 4)

Favorite.create(restaurant_id: 4,
                customer_id: 5)
