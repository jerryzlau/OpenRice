import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props){
    super(props);

    this.sessionLinks = this.sessionLinks.bind(this);
  }

  sessionLinks(){
    return(
      <nav className="login-signup">
        <button className="signup"><Link to="/signup">Sign up</Link></button>
        <button className="login"><Link to="/login">Login</Link></button>
      </nav>
    );
  }


  personalGreeting(currentUser, logout){
    //TODO: make this group into a drop down
    return(
      <div className="header-group">
        <button className="header-name">Hi, {currentUser.first_name.capitalize()}!</button>
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
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
