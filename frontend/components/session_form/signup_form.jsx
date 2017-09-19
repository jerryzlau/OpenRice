// import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
//
// class SignUpForm extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       // confirm_password: '', add confirm password function to auth later
//       email: '',
//       password: '',
//       first_name: '',
//       last_name: '',
//       owner: true,
//       primary_city: ''
//     };
//
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.loggedIn) {
//       this.props.history.push('/');
//     }
//   }
//
//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     const user = this.state;
//     this.props.processForm(user);
//   }
//
//
// }
//
// export default SignUpForm;
