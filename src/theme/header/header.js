import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBack: false
    };
  }

  // lifecycle
  componentWillMount() {
    if (this.props.location.pathname !== '/') {
      this.setState({ showBack: true });
    } else {
      this.setState({ showBack: false });
    }

    this.unlisten = this.props.history.listen((location, action) => {
      if (location.pathname !== '/') {
        this.setState({ showBack: true });
      } else {
        this.setState({ showBack: false });
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  // Renders
  render() {
    return (
      <header className="header">
        <Link to={`/`}>
          <div className="header-back">
            <p>{this.state.showBack === true ? '<' : ''}</p>
          </div>
        </Link>
        Article list
      </header>
    );
  }
}

export default withRouter(Header);
