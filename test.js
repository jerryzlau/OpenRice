import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // confirm_password: '', add confirm password function to auth later
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      owner: false,
      primary_city: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signUpForm = this.signUpForm.bind(this);
    this.loginForm = this.loginForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  signUpForm(){
    return(
      <div className="signup-form">
      <label>First Name:
        <input type="text"
          value={this.state.first_name}
          onChange={this.update('first_name')}
          className="signup-input"
        />
      </label>

      <br/>
      <label>Last Name:
        <input type="text"
          value={this.state.last_name}
          onChange={this.update('last_name')}
          className="signup-input"
        />
      </label>

      <br/>
      <label>Enter Email:
        <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className="signup-input"
        />
      </label>
      <br/>

      <label>Enter Password:
        <input type="password"
          value={this.state.password}
          onChange={this.update('password')}
          className="signup-input"
        />
      </label>
      <br/>


      <label>Primary Dining Location:
        <input type="text"
          value={this.state.primary_location}
          onChange={this.update('primary_location')}
          className="signup-input"
        />
      </label>
      <br/>

      <label>Restaurant Owner?
        <input type="checkbox"
          value={this.state.owner}
          onClick={this.update('owner')} name="check" >
        </input>
      </label>
      <br/>

      <input type="submit" value="Create Account" />
    </div>
    );
  }

  loginForm(){
    return(
      <div className="login-form">
        <br/>
        <label>Email:
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
          />
        </label>
        <br/>

        <label>Password:
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
          />
        </label>

        <br/>
        <input type="submit" value="Sign In" />
      </div>
    );
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">

          {this.renderErrors()}
          {
            (this.props.formType === 'signup') ?
            this.signUpForm() : this.loginForm()
          }
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);

// Please {this.props.formType} or {this.navLink()}
