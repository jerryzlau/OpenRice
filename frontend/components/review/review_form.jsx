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
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.props.restaurant.owner_id === this.props.currentUser.id){
      return alert("Owner cannot make bias reviews about his own restauarnt");
    }else{
      this.state.author_id = this.props.currentUser.id;
    }

    this.props.createReview(this.state);
  }

  reviewRadio(category){
    return(
      <div className="review-radio">
        <input type="radio"
                value={this.state[category]}
                onChange={this.update(category)}
                name="star"
                className="star-1"
                id="star-1" />
        <input type="radio"
                value={this.state[category]}
                onChange={this.update(category)}
                name="star"
                className="star-2"
                id="star-2" />
        <input type="radio"
                value={this.state[category]}
                onChange={this.update(category)}
                name="star"
                className="star-3"
                id="star-3" />
        <input type="radio"
                value={this.state[category]}
                onChange={this.update(category)}
                name="star"
                className="star-4"
                id="star-4" />
        <input type="radio"
                value={this.state[category]}
                onChange={this.update(category)}
                name="star"
                className="star-5"
                id="star-5" />
      </div>
    );
  }

  render(){
    return(
      <div className="review-form-container">
        <form className="review-form">

          <div class="stars">
            <input type="radio" name="star" class="star-1" id="star-1" />
            <label class="star-1" for="star-1">1</label>
            <input type="radio" name="star" class="star-2" id="star-2" />
            <label class="star-2" for="star-2">2</label>
            <input type="radio" name="star" class="star-3" id="star-3" />
            <label class="star-3" for="star-3">3</label>
            <input type="radio" name="star" class="star-4" id="star-4" />
            <label class="star-4" for="star-4">4</label>
            <input type="radio" name="star" class="star-5" id="star-5" />
            <label class="star-5" for="star-5">5</label>
            <span></span>
        </div>

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
