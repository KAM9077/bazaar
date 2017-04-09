import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { registerUser } from '../../actions/auth';

const form = reduxForm({
  form: 'register',
  validate,
});

const renderField = field => (
  <div>
    <input className="form-control" {...field.input} />
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

function validate(formProps) {
  const errors = {};

  if (!formProps.firstName) {
    errors.firstName = 'Please enter a first name';
  }

  if (!formProps.lastName) {
    errors.lastName = 'Please enter a last name';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
}

class Register extends Component {
  handleFormSubmit(formProps) {
    this.props.registerUser(formProps);
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
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="form">
        {this.renderAlert()}
        <div className="row">
          <div className= "col-xs-9 .col-sm-3 .col-lg-5">
            <label className="form_text">Family name</label>
            <Field name="lastName" className="form-control" component={renderField} type="text" placeholder="The family name" />
          </div>
        </div>
        <div className="row">
          <div className= "col-xs-9 .col-sm-3 .col-lg-5">
            <label className="form_text">First name</label>
            <Field name="firstName" className="form-control" component={renderField} type="text" placeholder="The first name" />
          </div>
        </div>
        <div className="row">
          <div className= "col-xs-9 .col-sm-3 .col-lg-5">
            <label className="form_text">Email</label>
            <Field name="email" className="form-control" component={renderField} type="text" placeholder="The email" />
          </div>
        </div>
        <div className="row">
          <div className= "col-xs-9 .col-sm-3 .col-lg-5">
            <label className="form_text">Password</label>
            <Field name="password" className="form-control" component={renderField} type="password" placeholder="The password" />
          </div>
        </div>
        <div className= "col-xs-9 .col-sm-3 .col-lg-5 text-center">
        <div className="row">
          <button type="submit" className="btn btn-default">Register</button>
        </div>
        </div>
      </form>
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

export default connect(mapStateToProps, { registerUser })(form(Register));
