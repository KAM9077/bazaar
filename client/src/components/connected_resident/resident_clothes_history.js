
import React, { Component } from 'react';

class resident_clothes_history extends Component {

  render() {
      return (

        <div className="container">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                <p className="btn nom" style="font-size:1.6em;font-weight:bold;">{this.props.firstName}</p>
                <p className="btn nom" style="font-size:1.6em;font-weight:bold;"> +  {this.props.pointClothes} Points </p>
              </div>
              <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 text-right"></div>
              <div className="text-center">
                <img src="../../public/img/iconMan.png" className="img-circle img-shop"/>
              </div>
            </div>

          <div className="row">
              <div className="clearfix"><br></br></div>
              <div className="clearfix"><br></br></div>
              <div className="clearfix"><br></br></div>
              <div className="clearfix"><br></br></div>
              <div className="clearfix"><br></br></div>
          </div>

            <div className="row text-center" >
              <pre style={{color :"rgb(38,169,224)", fontSize: "160%"}}>
                Date  Article  Cost
              </pre>
              <pre style={{color: "black", fontSize: "120%"}}>
                {this.props.clothes.item.date}      {this.props.clothes.item.type}    {this.props.clothes.item.price}
              </pre>
            </div>
          </div>);}
}

export default resident_clothes_history;
