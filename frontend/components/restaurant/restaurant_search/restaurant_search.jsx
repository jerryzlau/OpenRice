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
    this.props.searchRestaurants(this.state.searchKeyword);
  }

  render(){
    return(
      <form className="search-bar-form">
        <h1>Make restaurant reservations the easy way</h1>
        <div className="search-bar">
          <input type="text"
            className="search-input"
            value={this.state.searchKeyword}
            onChange={this.update('searchKeyword')}
            placeholder="Location, Restaurant, or Cuisine"/>

          <input className="submit-button"
            onClick={this.handleSubmit}
            type="submit"
            value="Find a Rice Bowl" />
        </div>
      </form>
    );
  }
}

export default restaurantSearch;
