import React, { Component } from 'react';

import './footer.scss';

export default class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              © 2018 Baishi.io
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
