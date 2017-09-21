import React from 'react';

class Restaurant extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      owner_id: "",
      start_price: "",
      end_price: "",
      capacity: "",
      address: "",
      cusine_type: "",
      phone_num: "",
      website: "",
      dining_style: "",
      description: "",
      open_time: "",
      close_time: ""
    };
    debugger
  }

  componentDidMount(){

  }

  render(){
    return(
      <div>
        <h1>Restaurant Show Page</h1>
      </div>
    );
  }
}

export default Restaurant;
