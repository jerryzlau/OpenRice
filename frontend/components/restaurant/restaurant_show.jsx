import React from 'react';


class RestaurantShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.restaurantId !== nextProps.match.params.restaurantId) {
  //     this.props.requestRestaurant(nextProps.match.params.restaurantId);
  //   }
  // }

  render(){
    if (!this.props.restaurant){
      return(
        <div className="loading">
          <i className="fa fa-spinner fa-spin fa-5x" ></i>
        </div>
      );
    }else{
      return(
        <div>
          <div className="rest-show-header">
            <h1>{this.props.restaurant.name}</h1>
          </div>
        </div>
      );
    }
  }
}

export default RestaurantShow;

// let {name,
//   image_url,
//   descriptions,
//   address,
//   capacity,
//   cusine_type,
//   phone_num,
//   website,
//   dining_style,
//   open_time,
//   close_time,
//   start_price,
//   end_price,
//   owner} = this.props.restaurant;
