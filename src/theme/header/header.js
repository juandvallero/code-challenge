import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <header className="header">Article list</header>;
  }
}

export default Header;
