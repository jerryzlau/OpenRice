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

    //form actions
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRadio = this.updateRadio.bind(this);

    //radio star builder
    this.reviewRadio = this.reviewRadio.bind(this);

    //error handling
    this.renderErrors = this.renderErrors.bind(this);

  }

  componentDidMount(){
    this.props.clearReviewErrors();
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
      this.setState({
        [field]: parseInt(e.currentTarget.id.slice(-1))
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

    this.props.createReview(this.state).then(() => window.scrollTo(0,document.body.scrollHeight));
    this.setState({
      author_id: "",
      //restaurant_id subject to change depends on container
      restaurant_id: this.props.match.params.restaurantId,
      food: 1,
      ambience: 1,
      service: 1,
      value: 1,
      comment: ""
    });
  }

  reviewRadio(category){
    return(
      <div className="review-radio">

        <div className="review-radio-title">
          {category.capitalize()}
        </div>

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

  renderErrors() {
    if (this.props.errors !== []){
      return(
        <ul className="review-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} >
              {error}
            </li>
          ))}
        </ul>
      );
    } else {
      return;
    }
  }

  render(){
    return(
      <div className="review-form-container">
        <h1>Review Form</h1><hr/>
        {this.renderErrors()}
        <form className="review-form">
          <div className="review-form-top">
            {this.reviewRadio("food")}
            {this.reviewRadio("ambience")}
            {this.reviewRadio("service")}
            {this.reviewRadio("value")}
          </div>

          <h3 className="review-text-input-title">
            Your Review
          </h3>
          <div className="review-form-middle">
            <textarea
              value={this.state.comment}
              onChange={this.update('comment')}
              className="review-text-input"
            />
          </div>

          <div className="review-form-bottom">
            <input type="submit"
              onClick={this.handleSubmit}
              value="Submit Review"
              className="submit-button"
            /><br/>
          </div>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
