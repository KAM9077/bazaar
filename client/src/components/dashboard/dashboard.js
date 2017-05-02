import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import cookie from 'react-cookie';
import { protectedTest } from '../../actions/auth';
import family_members_list from '../connected_resident/family_members_list';
import ViewProfile from './profile/view-profile';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.props.protectedTest();
  }

  isRole(roleToCheck, toRender) {
    const userRole = cookie.load('user').role;

    if (userRole == roleToCheck) {
      return toRender;
    }

    return false;
  }

  adminMenu() {
    return (
      <div className="admin-menu">
        <Link to="/admin">Admin</Link>
      </div>
    );
  }

  helperMenu() {
    return (
      <div className="helper-menu">
        Helper menu coming soon.
      </div>
    );
  }

  residentMenu() {
    return (
      <div className="resident-menu">
        <ViewProfile />
        aaaaa
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.isRole('Admin', this.adminMenu())}
        {this.isRole('Helper', this.helperMenu())}
        {this.isRole('Resident', this.residentMenu())}
        <p>{this.props.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { content: state.auth.content };
}

export default connect(mapStateToProps, { protectedTest })(Dashboard);
