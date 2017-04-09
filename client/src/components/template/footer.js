import React, { Component } from 'react';

class FooterTemplate extends Component {

  render() {
    const d = new Date();
    const year = d.getFullYear();

    return (
      <footer>
        <div className="container footer">
          <div className="row">
            <div className="col-lg-12">
              <p className="copyright form_text">© {year}, Elpida Site. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterTemplate ;
