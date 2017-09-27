import React from 'react';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      author_id: "",
      //restaurant_id subject to change depends on container
      restaurant_id: this.props.match.params.restaurantId,
      food: 1,
      ambience: 1,
      service: 1,
      value: 1,
      comment: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.reviewRadio = this.reviewRadio.bind(this);
    this.updateRadio = this.updateRadio.bind(this);

  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  updateRadio(field) {

    return e => {
      console.log(field);

      this.setState({
        [field]: e.currentTarget.id.slice(-1)
      });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.props.currentUser){
      return alert("You need to log in");
    }else if(this.props.restaurant.owner_id === this.props.currentUser.id){
      return alert("Owner cannot make bias reviews about his own restauarnt");
    }else{
      this.state.author_id = this.props.currentUser.id;
    }

    this.props.createReview(this.state);
  }

  reviewRadio(category){
    return(
      <div className="review-radio">
        {category.capitalize()}
        <div className="stars">
          <input type="radio"
                  value={this.state[category]}
                  onChange={this.updateRadio(category)}
                  name={category}
                  className="star-1"
                  id="star-1" />
          <label onClick={e=>e.preventDefault()} className="star-1" htmlFor="star-1">1</label>
          <input type="radio"
                  value={this.state[category]}
                  onChange={this.updateRadio(category)}
                  name={category}
                  className="star-2"
                  id="star-2" />
          <label onClick={e=>e.preventDefault()} className="star-2" htmlFor="star-2">2</label>
          <input type="radio"
                  value={this.state[category]}
                  onChange={this.updateRadio(category)}
                  name={category}
                  className="star-3"
                  id="star-3" />
          <label onClick={e=>e.preventDefault()} className="star-3" htmlFor="star-3">3</label>
          <input type="radio"
                  value={this.state[category]}
                  onChange={this.updateRadio(category)}
                  name={category}
                  className="star-4"
                  id="star-4" />
          <label onClick={e=>e.preventDefault()} className="star-4" htmlFor="star-4">4</label>
          <input type="radio"
                  value={this.state[category]}
                  onChange={this.updateRadio(category)}
                  name={category}
                  className="star-5"
                  id="star-5" />
          <label onClick={e=>e.preventDefault()} className="star-5" htmlFor="star-5">5</label>
          <span></span>
        </div>
      </div>

    );
  }

  render(){
    return(
      <div className="review-form-container">
        <h1>Review Form</h1>
        <form className="review-form">

          {this.reviewRadio("food")}
          {this.reviewRadio("ambience")}


          {this.reviewRadio("service")}
          {this.reviewRadio("value")}

          <input type="text"
            value={this.state.comment}
            onChange={this.update('comment')}
            className="review-input"
          />

          <input type="submit"
            onClick={this.handleSubmit}
            value="Submit Review"
            className="review-submit"
          /><br/>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
