import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.review);
    return(
      <div>
        <h1>Review Index Item</h1>
      </div>
    );
  }
}

export default ReviewIndexItem;
