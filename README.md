# OpenRice

[Heroku Link](https://openrice.herokuapp.com/#/)

OpenRice is an OpenTable clone. OpenTable is an online restaurant-reservation service company founded by Chuck Templeton on 2 July 1998 and is based in San Francisco, California. The clone incorporates a Ruby on Rails backend with PostgreSQL database and a React/Redux frontend.

# Features & Implementation 

## Design Choices
The app's two target audiences are Customers and Restaurant Owners. Therefore, I have created two classes of users to fullfill their needs in isolation.

### Reservation
#### Restaurant Owners
In the restaurant owner's point of view, the only reason he would use openRice is to collect reservations to boost his revenue. Therefore, a restaurant owner will not be able to make a reservation at their own restaurant but only be able to view what reservation they have.
![Owner Reservation Show](https://github.com/jerryzlau/OpenRice/blob/master/docs/readme_images/owner/owner_reservation.png)

#### Customers
However, in a customer point of view, the only reason he would user openRice is to conveniently book a table for his lovely date. A restaurant owner will be exposing his business if normal customers can see his reservations, therefore, a cusomter can only make a reservation but not able to see any of the restaurant's reservations. 
![Customer Reservation Show](https://github.com/jerryzlau/OpenRice/blob/master/docs/readme_images/customer/customer_reservation.png)

### Review 
Reviews and rating are extremely important for a restaurant's reputation. However, if a restaurant owner can make reviews for his own restaurant, what would a customer think of this restaurant? Therefore, a restaurant owner does not have the right to rate his own restaurant but a customer does. (Keep in mind, a restaurant owner can still rate other's people's restaurants!)

### Restaurant Creation Right 
A user will only have the right to create a restaurant on openRice if he is a restaurant owner. In order to isolate this specific event, that option will only show up if the user is a restaurant owner as demonstrated below. 
![Restaurant_Form](https://github.com/jerryzlau/OpenRice/blob/master/docs/readme_images/owner/restaurant_create.png)

## Restaurant Search 
User can search restaurants by name, address, or cusine. Search keyword will be passed down to controller by ajax request, which calls an activerecord sql call to return an array of search result to the frontend. All the heavy lifting is done in the backend to ensure efficiency. 
```ruby 
#restaurant controller 
def index
  if params[:searchKeyword]
    @restaurants = Restaurant.find_by_keyword(params[:searchKeyword])
    if  @restaurants
      @restaurants
    else
      render json: ["No Restaurants Found"], status: 404
    end
  else
    @restaurants = Restaurant.all
  end
end
```

```ruby 
#restaurant model search function
def self.find_by_keyword(keyword)
  Restaurant.where("lower(address) like ?", "%#{keyword.downcase}%")
            .or(Restaurant.where("lower(name) like ?", "%#{keyword.downcase}%"))
            .or(Restaurant.where("lower(cusine_type) like ?", "%#{keyword.downcase}%"))
end
```

## Features to Further Implement and Improve
### Maps 
* Restaurant show page has interactive map for restaurant 
* Search results pinpoint all restaurant locations on map 
* Grab user current location for relevant restaurants

### Image upload 
* User profile picture upload
* Restaurant profile picture upload 

### Restaurant creation validation 
* Approval process for restaurant creation to ensure restaurants created are real 
