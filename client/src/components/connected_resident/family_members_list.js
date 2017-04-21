import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class family_members_list extends Component {

  render() {
      return (
        <ul className="list-group">
        </ul>
      );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default family_members_list;
