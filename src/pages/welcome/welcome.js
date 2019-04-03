import React, { Component } from 'react';
import './welcome.css';

import Header from '../../theme/header/header';
import Footer from '../../theme/footer/footer';
import CardContainer from '../../components/cardContainer/cardContainer';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // lifecycle
  async componentWillMount() {}

  render() {
    return (
      <div className="mainContainer">
        <Header />
        <div className="">
          <CardContainer />
        </div>
      </div>
    );
  }
}

export default Welcome;
