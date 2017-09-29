import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props){
    super(props);

    this.displayStars = this.displayStars.bind(this);
  }

  displayStars(){
    let {food, ambience, service, value} = this.props.review;
    let average = (food + ambience + service + value)/4;
    if (average < 2){
      return(
        <img src="http://res.cloudinary.com/jerryzlau/image/upload/v1506536943/Screen_Shot_2017-09-27_at_11.27.21_AM_k9rjyb.png"/>
      );
    }else if(average < 3){
      return(
        <img src="http://res.cloudinary.com/jerryzlau/image/upload/v1506536943/Screen_Shot_2017-09-27_at_11.27.29_AM_dckc6z.png" />
      );
    }else if(average < 4){
      return(
        <img src="http://res.cloudinary.com/jerryzlau/image/upload/v1506536943/Screen_Shot_2017-09-27_at_11.27.54_AM_kamgwq.png" />
      );
    }else if(average < 5){
      return(
        <img src="http://res.cloudinary.com/jerryzlau/image/upload/v1506536943/Screen_Shot_2017-09-27_at_11.28.09_AM_z3mldb.png" />
      );
    }else{
      return(
        <img src="http://res.cloudinary.com/jerryzlau/image/upload/v1506537154/Screen_Shot_2017-09-27_at_11.32.12_AM_m4hzrn.png" />
      );
    }
  }

  render(){
    // console.log(this.props.review);
    let {food, ambience, service, value, comment} = this.props.review;
    let {first_name,
         last_name,
         primary_city} = this.props.review.author;

    let created_on = this.props.review.created_at.slice(0,10);
    return(
      <div className="review-index-item">
        <div className="review-index-item-left">

          <div className="review-index-item-left-top">
            <div className="review-index-item-left-top-item">
              {this.displayStars()}
            </div>

            <div className="review-index-item-left-top-item">
              <i className="fa fa-user" aria-hidden="true"></i>
              <span> {first_name}({primary_city}) ·</span>
            </div>

            <div className="review-index-item-left-top-item">
              <span>Dined on: {created_on}</span>
            </div>
          </div>

          <div className="review-index-item-left-bottom">
            <span>{comment}</span>
          </div>
        </div>

        <div className="review-index-item-right">
          <span>FOOD {food}</span><br/>
          <span>AMBIENCE {ambience}</span><br/>
          <span>SERVICE {service}</span><br/>
          <span>VALUE {value}</span>
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
