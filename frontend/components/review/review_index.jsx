import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props){
    super(props);

    this.indexEl = this.indexEl.bind(this);
  }

  indexEl(){
    return this.props.reviews.map(review => (
      <ReviewIndexItem key={review.id} review={review} />
    ));
  }

  render(){
    return(
      <div>
        <h1>Review Index</h1>
        {this.indexEl()}
      </div>
    );
  }
}

export default ReviewIndex;
