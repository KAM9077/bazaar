import React, { Component } from 'react';
import { Link } from 'react-router';

class choose_category extends Component {

  render() {
      return (
        <div className="containerCenter text-center" style={{marginTop: "40%"}}>

          <div className="row clearfix">
            <Link to="resident_clothes_history">
              <button type="button" className="buttonCategory">
              Clothes
              </button>
            </Link>
          </div>
          <div  className="row">
            <Link to="resident_hygiene_history">
              <button type="button" className="buttonCategory">
              Hygiene
              </button>
            </Link>
          </div>

        </div> );}

}

export default choose_category;
