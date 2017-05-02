import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    return (
      <div>
      Members of the family {this.props.lastName}
      </div>
    );
  }
}

export default UserInfo;
