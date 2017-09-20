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
    return(
      <div className="header-group">
        <button className="header-name">Hi, {currentUser.first_name}!</button>
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

export default Greeting;
