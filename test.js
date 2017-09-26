import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
      <a href='/' >
      <img src="http://res.cloudinary.com/jerryzlau/image/upload/v1505869835/openrice_logo_qusua1.png" />
      </a>
      <h2><GreetingContainer/></h2>
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

    {/* <ProtectedRoute path='/' component={GreetingContainer} /> */}
  </div>
);

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;

// this.state = {
//   name: "",
//   owner_id: "",
//   start_price: "",
//   end_price: "",
//   capacity: "",
//   address: "",
//   cusine_type: "",
//   phone_num: "",
//   website: "",
//   dining_style: "",
//   description: "",
//   open_time: "",
//   close_time: ""
// };



const createRestaurant = restaurant => (
  $.ajax({
    method: 'POST',
    url: '/api/restaurants',
    data: {restaurant}
  })
);

"restaurant" : {
  "name": "demo - restaurant",
  "owner_id":1,
  "start_price":0,
  "end_price":100,
  "capacity":50,
  "address":"123 demo street",
  "cusine_type":"chinese",
  "phone_num":"0000000000",
  "website":"www.demo.com",
  "dining_style":"demo style",
  "description":"demo about",
  "open_time":"09:30 AM",
  "end_time":"10:00 PM"
}

restaurant = {name: "demo - restaurant",
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


let restaurant = {
  "id": 1,
  "name": "demo - restaurant6",
  "owner_id":1,
  "start_price":0,
  "end_price":100,
  "capacity":50,
  "address":"123 demo street",
  "cusine_type":"chinese",
  "phone_num":"0000000000",
  "website":"www.demo.com",
  "dining_style":"demo style",
  "description":"demo about",
  "open_time":"09:30 AM",
  "close_time":"10:00 PM"
}

this.props.createRestaurant(this.state)
          .then(data => {
                        console.log(data.restaurant.restaurant.id);
                        return this.props.history.push(`/restaurants/${data.restaurant.restaurant.id}`);
                        }
               );

 b = Restaurant.where("lower(name) like ?", "%urban%")

 dispatch(reservationActions(object)); //this is how to test actions in window

reservation = {
   customer_id: 1,
   restaurant_id: 1,
   num_ppl: 2,
   book_time: "7:00 PM",
   book_date: "Sun, 01 Jan 2017",
   notes: "No special request at the moment."
 };
