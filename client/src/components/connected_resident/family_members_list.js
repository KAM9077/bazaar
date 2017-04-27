import React, { Component } from 'react';

class family_members_list extends Component {

  render() {
      return (
        <div>
          <h3> {this.props.lastName} </h3>
          <ul className="list-group">
            {this.props.members.map( (person, index) => ( <li> {person} </li> ))}
          </ul>
        </div> );
  }

}

export default family_members_list;
