import React from 'react';

class restaurantSearch extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      // has search by name and address for now, need to search by time and date later
      searchKeyword: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();

  }

  render(){
    return(
      <form className="search-bar">

      </form>
    );
  }
}

export default restaurantSearch;
