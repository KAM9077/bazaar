import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { loginUser } from '../../actions/auth';

const form = reduxForm({
  form: 'login',
});

class Login extends Component {
  handleFormSubmit(formProps) {
    this.props.loginUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="form-group" className="form" >
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          {this.renderAlert()}
          <div className= "col-xs-9 .col-sm-3 .col-lg-5">
            <label className="form_text"> Family name</label>
            <Field name="family_name" className="form-control" component="input" type="text" placeholder="Your family name" />
          </div>
          <div className= "col-xs-9 .col-sm-3 .col-lg-5">
            <label className="form_text">Password</label>
            <Field name="password" className="form-control" component="input" type="password" placeholder="Your password" />
          </div>
          <div className= "col-xs-9 .col-sm-3 .col-lg-5 text-center">
            <button type="submit" className="btn btn-default">Login</button>
          </div>
        </form>
          <Link to="/forgot-password" className= "col-xs-9 .col-sm-3 .col-lg-5 text-center form_text">Forgot Password ?</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, { loginUser })(form(Login));
