import React from 'react';

class RestaurantShow extends React.Component {
  constructor(props){
    super(props);
    // this.restaurant = this.props.restaurant;
  }

  // componentDidMount(){
  //   this.props.requestRestaurant(this.props.match.params.restaurantId);
  // }
  //
  // componentWillReceiveProps(nextProps){
  //   if (this.props.match.params.restaurantId !== nextProps.match.params.restaurantId){
  //     this.props.requestRestaurant(nextProps.match.params.restaurantId);
  //   }
  // }

  render(){
    console.log(this.props.restaurant);
    return(
      <div>
        <h1>restaurant show page</h1>
      </div>
    );
  }
}

export default RestaurantShow;
