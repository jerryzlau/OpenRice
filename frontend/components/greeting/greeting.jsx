import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Dropdown,
         DropdownToggle,
         DropdownMenu,
         DropdownItem } from 'reactstrap';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.join = this.join.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sessionLinks(){
    return(
      <nav className="login-signup">
        <button className="signup"><Link to="/signup">Sign up</Link></button>
        <button className="login"><Link to="/login">Login</Link></button>
      </nav>
    );
  }

  join(){
    if(this.props.currentUser.owner){
      return(
        <DropdownItem><Link to="/restaurants">Join OpenRice</Link></DropdownItem>
      );
    }else{
      return;
    }
  }

  personalGreeting(currentUser, logout){
    //TODO: make this group into a drop down
    return(
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Hi, {currentUser.first_name.capitalize()}!
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><Link to="/my/profile/info">My Profile</Link></DropdownItem>
          {this.join()}
          <DropdownItem onClick={logout}>Log Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  render(){
    let {currentUser, logout} = this.props;
    return(
      <div>
        {
          currentUser ? this.personalGreeting(currentUser
                                              , logout) : this.sessionLinks()
        }
      </div>
    );
  }

}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export default Greeting;
